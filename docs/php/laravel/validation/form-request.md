# Form Request Validation

[[TOC]]

## Generate Request
```bash
php artisan make:request StoreProductRequest
```

```php
// Controller

// Without Form Request
public function store(Request $request)
{
	// Validation code...
}

// With Form Request
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

```php
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:255|unique:categories,name',		
            'slug' => 'required|max:255|unique:categories,slug',		
        ];
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

## Preparing Input For Validation

```php
use Illuminate\Support\Str;

/**
 * Prepare the data for validation.
 *
 * @return void
 */
protected function prepareForValidation()
{
    $this->merge([
		'slug' => Str::slug($this->title),
		'published' => $this->published == 'on' ?? true,
		'user_id' => Auth::id()
    ]);
}
```

## Stop on First Validation Error

By default, Laravel validation errors will be returned in a list, checking all validation rules. But if you want the process to stop after the first error, use validation rule called bail:

```php
$request->validate([
    'title' => 'bail|required|unique:posts|max:255',
    'body' => 'required',
]);
```

If you need to stop validation on the first error in FormRequest class, you can set stopOnFirstFailure property to true:

```php
	protected $stopOnFirstFailure = true;
```
