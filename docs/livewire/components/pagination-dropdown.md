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

```php
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

```php
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
