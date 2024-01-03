# Enums

## Example

```php
// App\Enums\OrderStatus.php

namespace App\Enums;

enum OrderStatus: int
{
    case PENDING = 0;
    case COMPLETE = 1;

    public function label(): string
    {
        return match ($this) {
            self::PENDING => __('Pending'),
            self::COMPLETE => __('Complete'),
        };
    }
}
```


```php
// App\Enums\SupplierType.php

namespace App\Enums;

enum SupplierType: string
{
    case DISTRIBUTOR = 'distributor';

    case WHOLESALER = 'wholesaler';

    public function label(): string
    {
        return match ($this) {
            self::DISTRIBUTOR => __('Distributor'),
            self::WHOLESALER => __('Wholesaler'),
        };
    }
}
```


## Model

```php
protected $casts = [
	'order_status'  => OrderStatus::class
];
```

## Views

```php
<x-status dot color="{{ $order->order_status === \App\Enums\OrderStatus::COMPLETE ? 'green' : 'orange' }}"
		  class="text-uppercase"
>
	{{ $order->order_status->label() }}
</x-status>
```

```php
// Create Page

<select name="tax_type" id="tax_type" class="form-select @error('tax_type') is-invalid @enderror">

	@foreach(\App\Enums\TaxType::cases() as $taxType)
	<option value="{{ $taxType->value }}" @selected(old('tax_type') == $taxType->value)>
		{{ $taxType->label() }}
	</option>
	@endforeach
	
</select>
```

```php
// Edit Page

<select name="tax_type" id="tax_type" class="form-select @error('tax_type') is-invalid @enderror">

	@foreach(\App\Enums\TaxType::cases() as $taxType)
	<option value="{{ $taxType->value }}" @selected(old('tax_type', $product->tax_type) == $taxType->value)>
		{{ $taxType->label() }}
	</option>
	@endforeach
	
</select>
```

Source: https://jeffochoa.me/php-enums-best-practices?utm_source=laravelnews&utm_medium=link&utm_campaign=laravelnews
