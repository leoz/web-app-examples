
$(function() {
    $( "[data-role='navbar']" ).navbar();
    $( "[data-role='header'], [data-role='footer']" ).toolbar();

    // Set callbacks to resize the page
    var doInit = function(){
        fillPage();
        
        $(window).on("resize orientationchange", function(){
            fillPage();
        })
    };

    if (!$.mobile || !$.mobile.activePage) {
        $(document).on( "pagecontainershow", doInit);
    }
    else {
        doInit();
    }
});

// Resize the page
function fillPage() {
    scroll(0, 0);
    var content = $.mobile.getScreenHeight() -
                  $(".ui-header").outerHeight() - $(".ui-footer").outerHeight() -
                  $(".ui-content").outerHeight() + $(".ui-content").height();
    $(".ui-content").height(content);
}

// Update the contents of the toolbars
$( document ).on( "pageshow", "[data-role='page']", function() {
    // Each of the four pages in this demo has a data-title attribute
    // which value is equal to the text of the nav button
    // For example, on first page: <div data-role="page" data-title="Info">
    var current = $( this ).jqmData( "title" );
    // Change the heading
    $( "[data-role='header'] h1" ).text( current );
    // Remove active class from nav buttons
    $( "[data-role='navbar'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
    // Add active class to current nav button
    $( "[data-role='navbar'] a" ).each(function() {
        if ( $( this ).text() === current ) {
            $( this ).addClass( "ui-btn-active" );
        }
    });
});

