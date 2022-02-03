# Forms

[[TOC]]

### with Floating Labels

```html
<form action="" method="POST">	
	<div class="mb-3">
		<div class="form-floating mb-3">
			<input type="text" class="form-control" id="title" name="title" placeholder="title">
			<label for="title">Title</label>
		</div>
	</div>
	<div class="mb-3">
		<div class="form-floating">
			<textarea class="form-control" id="body" name="body" placeholder="body" style="height: 500px"></textarea>
			<label for="body">Body</label>
		</div>
	</div>
	<!--- Submit --->
	<button type="submit" class="btn btn-primary">Submit</button>
</form>
```