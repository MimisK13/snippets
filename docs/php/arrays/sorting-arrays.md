# Sorting Arrays

[[toc]]

## `sort()` — Ascending

The following example sorts the elements of the $cars array in ascending alphabetical order:

```php
	$cars = array("Volvo", "BMW", "Toyota");
	sort($cars);
```

## `rsort()` — Descending

The following example sorts the elements of the $cars array in descending alphabetical order:

```php
	$cars = array("Volvo", "BMW", "Toyota");
	rsort($cars);
```

## `asort()` — Values ascending

The following example sorts an associative array in ascending order, according to the value:

```php
	$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
	asort($age);
```

## `ksort()` — Keys ascending

The following example sorts an associative array in ascending order, according to the key:

```php
	$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
	ksort($age);
```

## `arsort()` — Values descending

The following example sorts an associative array in descending order, according to the value:

```php
	$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
	arsort($age);
```

## `krsort()` — Keys descending

The following example sorts an associative array in descending order, according to the key:

```php
	$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
	krsort($age);
```
