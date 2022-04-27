# Package Development

[[TOC]]

```bash
mkdir PackageName

cd PackageName

composer init
```

## Composer json example

```json
{
    "name": "VendorName/ui-kit",
    "description": "Package description",
    "type": "library",
    "license": "MIT",
    "autoload": {
        "psr-4": {
            "VendorName\\PackageName\\": "src/"
        }
    },
	"autoload-dev": {
		"psr-4": {
			"VendorName\\PackageName\\Tests\\": "tests/"
		}
	},
    "extra": {
        "laravel": {
            "providers": [
                "VendorName\\PackageName\\PackageNameServiceProvider"
            ]
        }
    },
    "authors": [
        {
            "name": "AuthorName",
            "email": "AuthorEmail"
        }
    ],
    "require-dev": {
        "orchestra/testbench": "^7.0" // Laravel 9.0
    }
}
```

## Git

### .gitignore

```
/node_modules
/vendor
/.idea
/.vscode
```

# Directory Structure

```
PackageName
├───config
│       ui-kit.php
│
├───database
│   ├───factories
│   └───migrations
├───models
├───resources
│   └───views
├───src
│   ├───Console
│   └───View
│       └───Components
└───tests
    ├───Feature
    └───Unit
```

# Local

```json
"repositories": [
	{
		"type": "path",
		"url": "../../packages/PackageName",
		"options": {
			"symlink": true
		}
	},
],
```

```json
"repositories": {
	"dev-package": {
		"type": "path",
		"url": "../../packages/PackageName",
		"options": {
			"symlink": true
		}
	}
}
```
