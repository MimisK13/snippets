# Policies

[[TOC]]

## Generate Policies
```
    php artisan make:policy PostPolicy --model=Post
```

## Methods

```viewAny```, ```view```, ```create```, ```update```, ```delete```, ```restore```, ```forceDelete ```

## Examples

```php
    namespace App\Policies;
    
    use App\Models\Blog;
    use App\Models\User;
    use Illuminate\Auth\Access\Response;
    
    class BlogPolicy
    {
        /**
         * Determine whether the user can view any models.
         */
        public function viewAny(User $user): bool
        {
            return true;
        }
    
        /**
         * Determine whether the user can view the model.
         */
        public function view(User $user, Blog $blog): bool
        {
            return true;
        }
    
        /**
         * Determine whether the user can create models.
         */
        public function create(User $user): bool
        {
            return true;
        }
    
        /**
         * Determine whether the user can update the model.
         */
        public function update(User $user, Blog $blog): bool
        {
            return $user->id === $blog->user_id;
        }
    
        /**
         * Determine whether the user can delete the model.
         */
        public function delete(User $user, Blog $blog): bool
        {
            return $user->id === $blog->user_id;
        }
    
        /**
         * Determine whether the user can restore the model.
         */
        public function restore(User $user, Blog $blog): bool
        {
            return $user->id === $blog->user_id;
        }
    
        /**
         * Determine whether the user can permanently delete the model.
         */
        public function forceDelete(User $user, Blog $blog): bool
        {
            return $user->id === $blog->user_id;
        }
    }
```

## Snippets

```php
    class UserPolicy
    {
        // Ο χρήστης βλέπει μόνο τα buttons που ανήκουν στο profile του.
        // πχ βλέπει το create, edit, delete blog post μόνο αν είναι στο δικό του profile.
        public function viewOwnButton(User $currentUser, User $profileUser): bool
        {
            return $currentUser->id === $profileUser->id;
        }
    }
```

```php
    class UserPolicy
    {
        // Ο χρήστης ΔΕΝ βλέπει κάποια κουμπιά και τα βλέπουν οι άλλοι συνδεμένοι χρήστες
        // πχ report και block ΔΕΝ τα βλέπει ο ιδιοκτήτης του profile.
        public function viewOtherButton(User $currentUser, User $profileUser): bool
        {
            // Επιστρέφει true μόνο αν ο τρέχων χρήστης ΔΕΝ είναι ο ιδιοκτήτης του προφίλ
            return $currentUser->id !== $profileUser->id;
        }
    }
```

```php
    @can('viewOwnButton', $profile)
        <a href="{{ route('blog.create') }}" class="bg-awaipink-400 inline-flex text-white items-center px-4 py-2 rounded-md space-x-2">
            <i class="fa-solid fa-plus"></i>
            <span>{{ __('Add New Video') }}</span>
        </a>
    @endcan
```
