# Validation

[[TOC]]

## Generate Request
```bash
php artisan make:request StoreProductRequest
```

Old - Without Store Request
```php
public function store(Request $request)
{
	
}
```

New - With Store Request
```php
public function store(StoreProductRequest $request)
{
	Product::create($request->validated());	
}
```

## StoreRequest

StoreProductRequest
```php
class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => [                
                'required',
                'min:3'
            ],		
            'description' => [
                'required'
            ]
        ];
    }
}
```

## UpdateRequest

```php
class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => [                
                'required',
                'min:3'.
				'unique:products,name,' . request()->route('product')->id
            ],
            'description' => [
                'required'            
            ],
        ];
    }
}
```