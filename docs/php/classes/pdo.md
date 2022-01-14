# PDO

## PHP Data Objects

```php
class Database {

	// Database Parameters
	private $dbhost = 'localhost';
	private $dbuser = 'root';
	private $dbpass = '';
	private $dbname = '';
	private $conn;

	// Database Connection
	public function connect(){

		$this->conn = null;

		$dsn = 'mysql:host=' . $this->dbhost . ';dbname=' . $this->dbname;

		try {			
			$this->conn = new PDO($dsn, $this->dbuser, $this->dbpass);
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

		
		} catch(PDOexception $e) {

			echo 'Connection Error: ' . $e->getMessage();
		}

		return $this->conn;
	}
	
}
```