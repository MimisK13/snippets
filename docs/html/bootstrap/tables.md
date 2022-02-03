# Tables

[[TOC]]

## Hoverable rows

```html 
<table class="table table-hover">
  ...
</table>
```

## Striped table

```html 
<table class="table table-striped table-hover">
  ...
</table>
```

## Bordered table

```html
<table class="table table-bordered">
  ...
</table>
```

## Small table

```html
<table class="table table-sm">
  ...
</table>
```

## Responsive

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

## Examples

### Skeleton

Responsive, bordered, hover

```html
<div class="table-responsive">
	<table class="table table-bordered table-hover align-middle">
		<thead class="text-center">
			<tr>
				<th>#</th>
				<th>title</th>
				<th>Author</th>				
				<th>Created At</th>
				<th>Updated At</th>				
				<th></th>
			</tr>
		</thead>
		<tbody class="text-center">
			<tr>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>		
```

### Laravel

```html
<div class="table-responsive">
	<table class="table table-bordered table-hover align-middle">
		<thead class="text-center">
			<tr>
				<th>#</th>
				<th>title</th>
				<th>Author</th>				
				<th>Created At</th>
				<th>Updated At</th>				
				<th></th>
			</tr>
		</thead>
		<tbody class="text-center">
			@foreach($posts as $post)
			<tr>
				<td>{{ $post->id }}</td>
				<td>{{ $post->title }}</td>
				<td>{{ $post->user->name }}</td>
				<td>{{ $post->created_at }}</td>
				<td>{{ $post->updated_at }}</td>				
				<td>					
					<a href="{{ route('posts.show', $post) }}" class="btn btn-sm btn-outline-primary">
						<i class="bi bi-eye-fill"></i>
					</a>
					<a href="{{ route('posts.edit', $post) }}" class="btn btn-sm btn-outline-warning">
						<i class="bi bi-pencil-fill"></i>
					</a>			
					<form action="{{ route('posts.destroy', $post) }}" method="POST">
						@method('DELETE')
						@csrf
						<button type="submit" class="btn btn-sm btn-outline-danger">
							<i class="bi bi-trash"></i>
						</button>
					</form>										
				</td>
			</tr>
			@endforeach
		</tbody>
	</table>
</div>
```
