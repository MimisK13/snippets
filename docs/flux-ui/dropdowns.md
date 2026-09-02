# Dropdowns

## Transaction actions

```php
<flux:dropdown position="bottom" align="end">
    <flux:button icon-trailing="ellipsis-vertical" variant="ghost" size="xs" inset></flux:button>

    <flux:menu>
        <flux:menu.item href="{{ route('transaction.show', $transaction) }}" wire:navigate.hover icon="eye">View</flux:menu.item>
        <flux:menu.item href="{{ route('transaction.edit', $transaction) }}" wire:navigate.hover icon="pencil">Edit</flux:menu.item>

        <flux:menu.separator />

        <flux:menu.item
            wire:click="delete({{ $transaction->id }})"
            wire:confirm="Are you sure?"
            variant="danger"
            icon="trash"
        >
            Delete
        </flux:menu.item>
    </flux:menu>
</flux:dropdown>
```
