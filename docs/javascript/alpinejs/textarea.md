# Textarea

```html
<textarea
	placeholder="Type something..."
	x-data="{resize: () { resize() => { $el.style.height = '40px'; $el.style.height = $el.scrollheight + 'px' }}"
	x-init="resize"
	x-on:input="resize"
></textarea>
```
