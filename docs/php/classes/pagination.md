# Pagination

[[TOC]]

## Pagination v1

```php
<?php

class Pagination {

    /**
     * Pagination constructor.
     *
     * @param $totalItems
     * @param $itemsPerPage
     * @param $currentPage
     */
    public function __construct ($totalItems, $itemsPerPage, $currentPage)
    {
        // Define Variable.
        $pagination = '';

        // Open unordered list tag.
        $pagination .= '<ul class="pagination">';

        // Calculates the number of pages.
        // Divide the total number of items by the number of items we want per page.
        $totalPages = ceil($totalItems / $itemsPerPage);

        // v1
        // If we are not on page one, do not display the buttons.
        $pagination .= $currentPage > 1
            ? '<li>
                    <!--- Move to the first page. --->
                    <a href="?page=1" title="First page">&laquo;</a>
                    
                    <!--- Move one page back. --->
                    <a href="?page='.($currentPage - 1).'" title="Previous page">&lsaquo;</a>
                </li>'
            : '';
			
        // loop to show links to range of pages around current page
        $pageRange = 2;

        for ($x = ($currentPage - $pageRange); $x < (($currentPage + $pageRange) + 1); $x++) {

            if (($x > 0) && ($x <= $totalPages)) { // if it's a valid page number...

                // if we're on current page...
                if ($x == $currentPage) {
                    // 'highlight' it but don't make a link
                    $pagination .= '<li class="active">
                                        <a href="?page='.$x.'" title="Page '.$x.'">'.$x.'</a>
                                    </li>';

                } else { // if not current page...

                    $pagination .= '<li>
                                        <a href="?page='.$x.'" title="Page '.$x.'">'.$x.'</a>
                                    </li>'; // make it a link
                }
            }
        }        
              
        // If we are not on the last page, display the buttons.
        $pagination .= $nextLink = $currentPage != $totalPages
            ? '<li>
                    <!--- Move one page forward. --->
                    <a href="?page='.($currentPage + 1).'" title="Next page">&rsaquo;</a>
                    
                    <!--- Move to the last page. --->
                    <a href="?page='.$totalPages.'" title="Last page">&raquo;</a>
                </li>'
            : '';

        // Close unordered list tag.
        $pagination .= '</ul>';

        // Return pagination links.
        echo $pagination;
    }
}
```

## Pagination v2

```php
<?php

class Pagination {

    /**
     * Pagination constructor.
     *
     * @param $totalItems
     * @param $itemsPerPage
     * @param $currentPage
     */
    public function __construct ($totalItems, $itemsPerPage, $currentPage)
    {
        // Define Variable.
        $pagination = '';

        // Open unordered list tag.
        $pagination .= '<ul class="pagination">';

        // Calculates the number of pages.
        // Divide the total number of items by the number of items we want per page.
        $totalPages = ceil($totalItems / $itemsPerPage);


		// if not on page 1, don't show back links
		if ($currentPage > 1) {

			// show << link to go back to page 1
			$pagination .= '<li><a href=?page=1 title="First page">&laquo;</a></li>';

			// get previous page num
			$prevPage = $currentPage - 1;

			// show < link to go back 1 page
			$pagination .= '<li><a href="?page='.$prevPage.'" title="Previous page">&lsaquo;</a></li>';
		}	     


        // loop to show links to range of pages around current page
        $pageRange = 2;

        for ($x = ($currentPage - $pageRange); $x < (($currentPage + $pageRange) + 1); $x++) {

            if (($x > 0) && ($x <= $totalPages)) { // if it's a valid page number...

                // if we're on current page...
                if ($x == $currentPage) {
                    // 'highlight' it but don't make a link
                    $pagination .= '<li class="active">
                                        <a href="?page='.$x.'" title="Page '.$x.'">'.$x.'</a>
                                    </li>';

                } else { // if not current page...

                    $pagination .= '<li>
                                        <a href="?page='.$x.'" title="Page '.$x.'">'.$x.'</a>
                                    </li>'; // make it a link
                }
            }
        }        

        
		// if not on last page, show forward and last page links
		if ($currentPage != $totalPages) {

			// get next page
			$nextPage = $currentPage + 1;

			// echo forward link for next page
			$pagination .= '<li><a href="?page='.$nextPage.'" title="Next page">&rsaquo;</a></li>';

			// echo forward link for lastpage
			$pagination .= '<li><a href="?page='.$totalPages.'" title="Last page">&raquo;</a></li>';
		}
		

        // Close unordered list tag.
        $pagination .= '</ul>';

        // Return pagination links.
        echo $pagination;
    }
}
```