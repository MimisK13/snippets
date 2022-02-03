# Floating Lables

[[TOC]]

## Example

```html
<div class="form-floating mb-3">
	<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
	<label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
	<input type="password" class="form-control" id="floatingPassword" placeholder="Password">
	<label for="floatingPassword">Password</label>
</div>
```

### Textareas

```html
<div class="form-floating">
	<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px"></textarea>
	<label for="floatingTextarea">Comments</label>
</div>
```

### Selects

```html
<div class="form-floating">
	<select class="form-select" id="floatingSelect" aria-label="Floating label select example">
		<option selected>Open this select menu</option>
		<option value="1">One</option>
		<option value="2">Two</option>
		<option value="3">Three</option>
	</select>
	<label for="floatingSelect">Works with selects</label>
</div>
```
