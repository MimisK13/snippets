# Fields

[[TOC]]

## Show/Hide Fields

- showOnIndex
- showOnDetail
- showOnCreating
- showOnUpdating
- showOnPreview
- showWhenPeeking
- hideFromIndex
- hideFromDetail
- hideWhenCreating
- hideWhenUpdating
- onlyOnIndex
- onlyOnDetail
- onlyOnForms
- exceptOnForms

## Dynamic Field Methods 

```php
    public function fieldsForIndex(NovaRequest $request): array
    {
        return [
			//
        ];
    }

    public function fieldsForDetail(NovaRequest $request): array
    {
        return [
			//
        ];
    }

    public function fieldsForCreate(NovaRequest $request): array
    {
        return [
			//
        ];
    }

    public function fieldsForInlineCreate(NovaRequest $request): array
    {
        return [
			//
        ];
    }

    public function fieldsForUpdate(NovaRequest $request): array
    {
        return [
			//
        ];
    }

    public function fieldsForPreview(NovaRequest $request): array
    {
        return [
			//
        ];
    }
```
