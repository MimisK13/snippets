# Views

[[TOC]]

## Paginate

```php
{{ $products->links() }}

{{ $products->links('pagination::bootstrap-4') }}
```

## Select Drop Down

```php
<select class="form-select @error('category_id') is-invalid @enderror" name="category_id" id="category_id">
	<option selected disabled>
		Select
	</option>
	@foreach ($categories as $key => $value)
		<option value="{{ $key }}" @selected( old('category_id', $budget->category_id) == $key)>
			{{ $value }}
		</option>
	@endforeach
</select>
<label for="category_id">category</label>
```

## Textarea

```php
<textarea class="form-control  @error('notes') is-invalid @enderror"
		  id="notes"
		  name="notes"
		  style="height: 100px"
		  placeholder="Leave a note here"
>{{ old('notes', $budget->notes) }}</textarea>

<label for="notes">Notes</label>
```
