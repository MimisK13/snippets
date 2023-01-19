# Views

[[TOC]]

## Paginate

### Return to same page after Delete 

```php
// Controller

public function destroy(Request $request, User $user)
{
	$user->delete();

	$paginator = User::paginate(columns: ['id']);

	$redirectToPage = ($request->page <= $paginator->lastPage()) 
		? $request->page 
		: $paginator->lastPage();

	return redirect()->route('users.index', ['page' => $redirectToPage]);
}
```

```php
// view
<input type="hidden" name="page" value="{{ $users->currentPage() }}">

```

### Views 

```php
{{ $products->links() }}

{{ $products->links('pagination::bootstrap-4') }}
```

## @selected

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

## @disabled

```php
@disabled($task->is_completed)
```

```php
<button type="submit" @disabled($errors->isNotEmpty())>Submit</button>
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
