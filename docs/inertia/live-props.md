# Live Props

[[TOC]]

Inertia.js live props keep page data synchronized with broadcast events. When an event arrives, Inertia can partially reload the affected prop or apply a value carried by the event without a new request.[1][4][6]

They are useful for order statuses, unread counts, activity feeds, and dashboard metrics that should update without polling.

## Requirements

Live props require compatible client and Laravel adapters:[2][3]

```bash
composer require inertiajs/inertia-laravel:^3.7
npm install @inertiajs/vue3@^3.11 @laravel/echo-vue laravel-echo pusher-js
```

The Echo packages are optional peer dependencies. Applications that do not configure a live transport do not open a broadcast connection.[4]

For Laravel Reverb, configure and run broadcasting before enabling live props:

```bash
php artisan install:broadcasting
php artisan reverb:start
```

## Broadcast event

Define the event and authorize its private channel:

```php
namespace App\Events;

use App\Models\Order;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class OrderUpdated implements ShouldBroadcast
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

    public function __construct(public Order $order) {}

    public function broadcastOn(): PrivateChannel
    {
        return new PrivateChannel("orders.{$this->order->id}");
    }
}
```

```php
// routes/channels.php
use App\Models\Order;
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('orders.{order}', function (User $user, Order $order): bool {
    return $user->can('view', $order);
});
```

Live props support public, private, presence, and encrypted private channels. Private channels still require normal Laravel channel authorization.[1]

## `Inertia::live()`

Wrap the prop and provide the event that should refresh it. Inertia reads the channel and event name from the event instance.[1][5]

```php
namespace App\Http\Controllers;

use App\Events\OrderUpdated;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use Inertia\Inertia;
use Inertia\Response;

class OrderController
{
    public function show(Order $order): Response
    {
        return Inertia::render('Orders/Show', [
            'order' => Inertia::live(
                fn () => OrderResource::make($order->fresh()),
                on: new OrderUpdated($order),
            ),
        ]);
    }
}
```

When `OrderUpdated` is broadcast, Inertia performs a partial reload for `order`. Props listening for the same event on the same channel are collected into one request.[1][4]

Broadcast the event after updating the model:

```php
public function update(UpdateOrderRequest $request, Order $order): RedirectResponse
{
    $order->update($request->validated());

    broadcast(new OrderUpdated($order))->toOthers();

    return back();
}
```

## Client setup

Configure Echo and pass Inertia's `echo()` transport to `createInertiaApp()`:[1][4]

```js
// resources/js/app.js
import { createInertiaApp } from '@inertiajs/vue3'
import { echo } from '@inertiajs/vue3/echo'
import { configureEcho } from '@laravel/echo-vue'
import { createApp, h } from 'vue'

configureEcho({
  broadcaster: 'reverb',
})

createInertiaApp({
  live: echo(),

  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })

    return pages[`./Pages/${name}.vue`]
  },

  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
```

Inertia subscribes and unsubscribes automatically as the user navigates. It also refreshes live props after a dropped connection returns because events may have been missed while disconnected.[1]

## Multiple events

One prop can listen for several events:[1]

```php
'order' => Inertia::live(
    fn () => OrderResource::make($order->fresh()),
    on: [
        new OrderUpdated($order),
        new OrderCancelled($order),
        new OrderShipped($order),
    ],
),
```

Use a class name only when the event's channel and broadcast name do not depend on constructor data. Otherwise, pass an event instance or an explicit channel.[1]

```php
use Illuminate\Broadcasting\PrivateChannel;

'metrics' => Inertia::live(
    fn () => Metrics::today(),
    on: 'orders.updated',
    channel: new PrivateChannel('orders'),
),
```

## Deferred props

Deferred, once, optional, and always props can become live. Merge props cannot be live.[1][4]

```php
'activity' => Inertia::defer(
    fn () => OrderActivityResource::collection(
        $order->activity()->latest()->get(),
    ),
)->live(on: new ActivityLogged($order)),
```

An optional live prop does not begin refreshing until the page has requested it at least once.[1]

## Throttling

Each live prop reloads at most once per second by default. Configure a global throttle in milliseconds:[1][4]

```js
createInertiaApp({
  live: echo({
    throttle: 2000,
  }),
})
```

Or configure an individual high-frequency prop:

```php
'metrics' => Inertia::live(
    fn () => Metrics::today(),
    on: new MetricsUpdated(),
    throttle: 5000,
),
```

Events received during the throttle window are combined into one later refresh. Each prop is throttled independently, and manual `router.reload()` calls are not throttled.[1]

Live reloads pause while the browser tab is hidden and resume when it becomes visible. Disable this only when background tabs must stay current:[1]

```js
live: echo({
  pauseWhenHidden: false,
}),
```

## Broadcast values

A normal live event makes every connected page request the latest prop. For popular dashboards, one event can therefore produce many requests. `Inertia::broadcastProps()` can carry the new value inside the event and avoid those reload requests.[1][4]

```php
use App\Http\Resources\OrderResource;
use Inertia\Inertia;

public function broadcastWith(): array
{
    return [
        'order_id' => $this->order->id,

        ...Inertia::broadcastProps([
            'order' => OrderResource::make($this->order),
        ]),
    ];
}
```

Every subscriber to the channel receives the same payload. Only broadcast values that every authorized subscriber may see. Keep user-specific values in the partial reload, where the controller resolves them for the current request.[1]

Prefer API resources over models because broadcasting a model exposes every attribute not hidden by the model.[1]

## `useProp()`

`useProp()` exposes the current value and its refresh state. The loading state includes live reloads and deferred loading.[1][4]

```vue
<script setup>
import { useProp } from '@inertiajs/vue3'

const {
  value: order,
  loading,
  loaded,
} = useProp('order')
</script>

<template>
  <section :class="{ 'opacity-50': loading }">
    <p>{{ order.status }}</p>
    <small v-if="!loaded">Loading order…</small>
    <small v-else-if="loading">Refreshing…</small>
  </section>
</template>
```

## Live events

The router emits a cancelable `live` event before applying an update. Return `false` to postpone it, for example while the user is editing the current data.[1]

```js
import { router, useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

const form = useForm({ status: '' })
const pendingLiveEvent = ref(null)
const showNewDataAvailable = ref(false)

router.on('live', (event) => {
  if (form.isDirty) {
    pendingLiveEvent.value = event
    showNewDataAvailable.value = true

    return false
  }
})
```

Apply the pending props later:

```js
function applyPendingLive() {
  if (!pendingLiveEvent.value) return

  router.reload({
    only: pendingLiveEvent.value.detail.props,
  })

  pendingLiveEvent.value = null
  showNewDataAvailable.value = false
}
```

## Socket IDs

For same-origin requests, Inertia sends the active socket ID through `X-Socket-Id`. This allows Laravel's `toOthers()` to skip the browser connection that initiated the update.[1][4]

```php
broadcast(new OrderUpdated($order))->toOthers();
```

Use `toOthers()` when the initiating request already returned the updated prop. Avoid it when the current browser still needs the event to refresh other live values.

## Good practices

- Authorize every private or presence channel with the same care as an HTTP endpoint.
- Use one channel per resource or tenant when subscribers must receive different data.
- Add throttling to metrics, counters, logs, and other high-frequency props.
- Use API resources to control broadcast payloads.
- Keep personalized data in partial reloads instead of shared broadcast payloads.
- Combine deferred and live props for expensive data that is not needed during the initial render.
- Use `useProp()` for subtle refresh indicators instead of blocking the whole page.
- Measure event rate, connected clients, partial-reload traffic, and Reverb queue latency.

## Bad practices

Do not broadcast a complete model without checking its visible attributes:

```php
// Bad: every non-hidden attribute may be broadcast.
Inertia::broadcastProps([
    'order' => $this->order,
]);
```

Do not put user-specific values in a channel-wide payload:

```php
// Bad: all subscribers receive the same permission value.
Inertia::broadcastProps([
    'can_refund' => $this->order->canBeRefundedBy(auth()->user()),
]);
```

Do not make every prop live. Frequently changing props can create request amplification across many open tabs. Use normal navigation, polling, or manual refresh when real-time updates do not provide meaningful value.[1]

Do not use a public channel for private order, user, or tenant data.

## Version

- Live props introduced in Inertia.js `v3.11.0` through `inertiajs/inertia#3232`.[2][4]
- Laravel support introduced in `inertiajs/inertia-laravel` `v3.7.0` through PR `#901`.[3][5]
- Supported client adapters: Vue, React, and Svelte.[1][4]
- Supported transports include Laravel Echo, Pusher-compatible clients, Action Cable, and custom transports.[1][4]

## Sources

- [1] [Inertia.js v3 — Live Props](https://inertiajs.com/docs/v3/data-props/live-props)
- [2] [Inertia.js v3.11.0](https://github.com/inertiajs/inertia/releases/tag/v3.11.0)
- [3] [inertia-laravel v3.7.0](https://github.com/inertiajs/inertia-laravel/releases/tag/v3.7.0)
- [4] [Inertia.js PR #3232](https://github.com/inertiajs/inertia/pull/3232)
- [5] [inertia-laravel PR #901](https://github.com/inertiajs/inertia-laravel/pull/901)
- [6] [Laravel News — Live Props](https://laravel-news.com/inertia-3-11-0)
