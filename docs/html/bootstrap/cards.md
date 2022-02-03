# Cards

[[TOC]]

## Examples

### Skeleton

```html
<div class="card">
	<div class="card-header">
		Featured
	</div>
	<div class="card-body">
		...
	</div>
</div>
```

### Header with button

```html
<div class="card-header">
	<div class="d-flex justify-content-between">
		<div class="col">
			Users
		</div>

		<div class="col d-flex justify-content-end">
			<a href="" class="btn btn-sm btn-success">
				<i class="bi bi-plus-lg"></i>
			</a>
		</div>
	</div>		
</div>
```

### With table

```html
<div class="card">
	<div class="card-header">
		<div class="d-flex justify-content-between">
			<div class="col">
				Posts
			</div>

			<div class="col d-flex justify-content-end">
				<a href="{{ route('posts.create') }}" class="btn btn-sm btn-success">
					<i class="bi bi-plus-lg"></i>
				</a>
			</div>
		</div>
	</div>
	<div class="card-body">
		<div class="table-responsive">
			<table class="table table-bordered table-hover align-middle">
				<thead class="text-center">
					<tr>
						<th>#</th>
						<th>title</th>
						<th>Author</th>				
						<th>Created At</th>
						<th>Updated At</th>				
						<th>Actions</th>
					</tr>
				</thead>
				<tbody class="text-center">
					<tr>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
```