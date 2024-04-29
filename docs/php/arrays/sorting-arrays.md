# Sorting Arrays

[[toc]]

## sort() - Sort Array in Ascending Order

The following example sorts the elements of the $cars array in ascending alphabetical order:

```php
	$cars = array("Volvo", "BMW", "Toyota");
	sort($cars);
```

## rsort() - Sort Array in Descending Order

The following example sorts the elements of the $cars array in descending alphabetical order:

```php
	$cars = array("Volvo", "BMW", "Toyota");
	rsort($cars);
```

## asort() - Sort Array (Ascending Order), According to Value

The following example sorts an associative array in ascending order, according to the value:

```php
	$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
	asort($age);
```

## ksort() - Sort Array (Ascending Order), According to Key

The following example sorts an associative array in ascending order, according to the key:

```php
	$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
	ksort($age);
```

## arsort() - Sort Array (Descending Order), According to Value

The following example sorts an associative array in descending order, according to the value:

```php
	$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
	arsort($age);
```

## krsort() - Sort Array (Descending Order), According to Key

The following example sorts an associative array in descending order, according to the key:

```php
	$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
	krsort($age);
```
