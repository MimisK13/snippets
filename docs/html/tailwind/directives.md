# Directives

[[TOC]]

## @apply

### Button

```html
<!-- Before extracting a custom class -->
<button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
  Save changes
</button>

<!-- After extracting a custom class -->
<button class="btn-primary">
  Save changes
</button>
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
```

### Table

```css
@layer components {
    table {
        @apply min-w-full divide-y divide-gray-300;
    }

    thead {
        @apply bg-gray-50;
    }

    th {
        @apply py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-6 w-1/6;
    }

    table th:nth-child(1) { @apply w-1/6 }
    table th:nth-child(3) { @apply w-1/6 }
    table tr:nth-child(odd) { @apply bg-white text-gray-900 }
    table tr:nth-child(even) { @apply bg-gray-50 text-gray-900 }

    tbody {
        @apply bg-white;
    }

    td {
        @apply px-3 py-4 text-sm text-gray-500;
    }
}
```

```html
<table>
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col" class="w-auto">Name</th>
            <th scope="col">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Jane Doe</td>
            <td class="flex justify-evenly py-4 pl-3">
                <a href="" class="text-indigo-600 hover:text-indigo-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                </a>
                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </a>
            </td>
        </tr>
    </tbody>
</table>
```


## @layer
