
[[TOC]]

## orderBy

```php
return view('welcome', [	
	'mostViewedProducts' => Product::select(['name', 'slug', 'views'])
		->orderBy('views', 'desc')
		->take(5)
		->get()
]);
```

## Get Current Week Records

```php
$items = Item::select("*")
        ->whereBetween('created_at', 
                [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]
            )
        ->get();

dd($items);
```

## Group By with Month and Year

```php
<?php
   
namespace App\Http\Controllers;
  
use App\Models\Visitor;
use DB;
  
class DemoController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function index()
    {
        $visitors = Visitor::select(
                            "id" ,
                            DB::raw("(sum(click)) as total_click"),
                            DB::raw("(DATE_FORMAT(created_at, '%m-%Y')) as month_year")
                            )
                            ->orderBy('created_at')
                            ->groupBy(DB::raw("DATE_FORMAT(created_at, '%m-%Y')"))
                            ->get();
  
        dd($visitors);
    }
}
```

## Get Data Between Two Dates

### Solution 1

```php
<?php
  
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
  
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $startDate = Carbon::createFromFormat('d/m/Y', '01/01/2021');
        $endDate = Carbon::createFromFormat('d/m/Y', '06/01/2021');
  
        $users = User::select('id', 'name', 'email', 'created_at')
                        ->whereBetween('created_at', [$startDate, $endDate])
                        ->get();
  
        dd($users);
    }
}
```

### Solution 2

```php
<?php
  
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
  
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $startDate = Carbon::createFromFormat('d/m/Y', '01/01/2021');
        $endDate = Carbon::createFromFormat('d/m/Y', '06/01/2021');
  
        $users = User::select('id', 'name', 'email', 'created_at')
                        ->where('created_at', '>=', $startDate)
                        ->where('created_at', '<=', $endDate)
                        ->get();
  
        dd($users);
    }
}
```

### Solution 3

```php
<?php
  
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
  
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $startDate = '01/01/2021';
        $endDate = '06/01/2021';
  
        $users = User::select('id', 'name', 'email', 'paid_date')
                        ->whereDate('paid_date', '>=', $startDate)
                        ->whereDate('paid_date', '<=', $endDate)
                        ->get();
  
        dd($users);
    }
}
```
