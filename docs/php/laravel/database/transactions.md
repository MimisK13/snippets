# Transactions

[[TOC]]

## Retry a transaction when a deadlock occurs

Laravel's `DB::transaction()` accepts a second argument named `attempts`. It tells Laravel how many times it should retry the **whole transaction closure** when the database reports a deadlock.

This is useful for high-concurrency code where two requests may update the same rows in a different order.

```php
use App\Models\Order;
use Illuminate\Support\Facades\DB;

DB::transaction(function () use ($orderId) {
    $order = Order::query()
        ->whereKey($orderId)
        ->lockForUpdate()
        ->firstOrFail();

    $order->update([
        'status' => 'paid',
    ]);
}, attempts: 3);
```

For older PHP versions, use the positional argument:

```php
DB::transaction(function () use ($orderId) {
    $order = Order::query()
        ->whereKey($orderId)
        ->lockForUpdate()
        ->firstOrFail();

    $order->update([
        'status' => 'paid',
    ]);
}, 3);
```

If Laravel still receives deadlocks after all attempts are exhausted, it throws the exception.

## Transfer money safely with retries

Use transactions when several writes must succeed or fail together.

```php
use App\Models\Account;
use Illuminate\Support\Facades\DB;

DB::transaction(function () use ($fromAccountId, $toAccountId, $amount) {
    $accounts = Account::query()
        ->whereIn('id', [$fromAccountId, $toAccountId])
        ->orderBy('id') // Always lock rows in the same order.
        ->lockForUpdate()
        ->get()
        ->keyBy('id');

    $from = $accounts[$fromAccountId];
    $to = $accounts[$toAccountId];

    if ($from->balance < $amount) {
        throw new RuntimeException('Insufficient balance.');
    }

    $from->decrement('balance', $amount);
    $to->increment('balance', $amount);
}, attempts: 5);
```

## Reserve stock under concurrency

`lockForUpdate()` prevents two requests from selling the same last item at the same time.

```php
use App\Models\Product;
use Illuminate\Support\Facades\DB;

DB::transaction(function () use ($productId, $quantity) {
    $product = Product::query()
        ->whereKey($productId)
        ->lockForUpdate()
        ->firstOrFail();

    if ($product->stock < $quantity) {
        throw new RuntimeException('Not enough stock.');
    }

    $product->decrement('stock', $quantity);
}, attempts: 3);
```

## Keep external side effects outside the transaction

Because the whole closure may run again, avoid doing non-idempotent external work inside it:

```php
// Avoid: this email may be sent more than once if the transaction is retried.
DB::transaction(function () use ($order) {
    $order->update(['status' => 'paid']);

    Mail::to($order->user)->send(new OrderPaidMail($order));
}, attempts: 3);
```

Prefer committing the database state first, then queue side effects after commit:

```php
use App\Jobs\SendOrderPaidEmail;
use Illuminate\Support\Facades\DB;

DB::transaction(function () use ($order) {
    $order->update(['status' => 'paid']);
}, attempts: 3);

SendOrderPaidEmail::dispatch($order->id)->afterCommit();
```

## Tips to reduce deadlocks

- Keep transactions small and fast.
- Lock rows in a consistent order, for example `orderBy('id')` before `lockForUpdate()`.
- Do not wait on HTTP calls, emails, queues, or slow file operations inside the transaction.
- Add proper indexes for the columns used in `where`, `join`, and `orderBy` clauses.
- Retry only operations that are safe to run more than once.
- Use the `attempts` argument for transient deadlocks, not for hiding broken logic.

## Manual transaction pattern

Use manual transactions when you need more control around the `try / catch` flow.

```php
use Illuminate\Support\Facades\DB;
use Throwable;

try {
    DB::beginTransaction();

    // Database writes...

    DB::commit();
} catch (Throwable $e) {
    DB::rollBack();

    report($e);

    throw $e;
}
```

For simple cases, prefer `DB::transaction()` because it automatically commits, rolls back, and can retry deadlocks.
