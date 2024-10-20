# Pagination Dropdown

[[TOC]]

## CLASS

```php
<?php

namespace App\Livewire;

use Livewire\Component;

class PaginationDropdown extends Component
{
    public $perPage;

    public function mount($defaultPerPage = 10)
    {        
        $this->perPage = $defaultPerPage;
    }

    public function setPerPage($value): void
    {
        $this->perPage = $value;        

        $this->dispatch('paginationUpdated', $this->perPage);
    }

    public function render()
    {
        return view('livewire.pagination-dropdown');
    }
}
```

## VIEW

```html
<div x-data="{ open: false }" x-cloak class="relative inline-block text-left z-50">
    <div>
        <button @click="open = !open" type="button" class="inline-flex justify-center text-xs w-full px-4 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
            {{ $perPage }} per Page
            <i class="fa-solid fa-caret-down ml-2"></i>
        </button>
    </div>

    <div x-show="open" @click.away="open = false" x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0 transform scale-95" x-transition:enter-end="opacity-100 transform scale-100"
        x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100 transform scale-100"
        x-transition:leave-end="opacity-0 transform scale-95" class="absolute right-0 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg"
    >       
        <div class="py-1 px-1 w-[150px] text-xs" role="menu">
            <button wire:click="setPerPage(10)" @click="open = false" class="w-full block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">10 per Page</button>
            <button wire:click="setPerPage(25)" @click="open = false" class="w-full block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">25 per Page</button>
            <button wire:click="setPerPage(50)" @click="open = false" class="w-full block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">50 per Page</button>
            <button wire:click="setPerPage(100)" @click="open = false" class="w-full block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">100 per Page</button>
        </div>
    </div>
</div>
```

```html
<div x-data="{
    open: false, 
    perPage: localStorage.getItem('perPage') || {{ $perPage }},
    setPerPage(value) {
        this.perPage = value;
        localStorage.setItem('perPage', value);
        $wire.setPerPage(value);
        this.open = false;
    }}" 
    x-cloak 
    class="relative inline-block text-left z-50"
>
    <div>
        <button @click="open = !open" type="button" class="inline-flex justify-center text-xs w-full px-4 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
            {{ $perPage }} per Page
            <i class="fa-solid fa-caret-down ml-2"></i>
        </button>
    </div>

    <div x-show="open" @click.away="open = false" x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0 transform scale-95" x-transition:enter-end="opacity-100 transform scale-100"
        x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100 transform scale-100"
        x-transition:leave-end="opacity-0 transform scale-95" class="absolute right-0 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg"
    >
        <div class="py-1 px-1 w-[150px] text-xs" role="menu">
            <button @click="setPerPage(10)" class="w-full block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">10 per Page</button>
            <button @click="setPerPage(25)" class="w-full block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">25 per Page</button>
            <button @click="setPerPage(50)" class="w-full block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">50 per Page</button>
            <button @click="setPerPage(100)" class="w-full block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">100 per Page</button>
        </div>
    </div>
</div>
```

## Post Component Class

```php
#[Lazy]
class Posts extends Component
{
    use WithPagination;

    public $perPage;

    #[On('paginationUpdated')]
    public function updatePerPage($value): void
    {
        $this->perPage = $value;
        
        $this->resetPage();
    }

    public function render()
    {
        $posts = Post::query()
                ->with('user')
                ->orderByDesc('created_at')
                ->paginate($this->perPage);

        return view('livewire.posts', [
            'posts' => $posts,
        ]);
    }
}
```

## Post Component View
```html
<div>
    <!-- Λίστα των posts -->
    <ul class="list-disc list-inside">
        @forelse($posts as $post)
            <li class="mb-2">
                <a href="{{ route('posts.show', $post->id) }}" class="text-blue-600 hover:underline">
                    {{ $post->title }}
                </a>
                <p class="text-gray-500 text-sm">
                    {{ $post->created_at->format('F j, Y') }}
                </p>
            </li>
        @empty
            <li>{{ __('No posts available.') }}</li>
        @endforelse
    </ul>

    <!-- Links για τη σελιδοποίηση -->
    <div class="mt-4">
        {{ $posts->links() }} <!-- Το built-in pagination links του Laravel -->
    </div>
</div>
```

## Total View

```html
<div class="container mx-auto">
    <!-- Header or title of the page -->
    <div class="text-center mb-8">
        <h1 class="text-3xl font-bold">Posts</h1>
    </div>

    <!-- Pagination Dropdown Component -->
    <div class="mb-4 flex justify-end">
        <livewire:pagination-dropdown />
    </div>

    <!-- Posts Component -->
    <div>
        <livewire:posts />
    </div>
</div>
```