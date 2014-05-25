
$(function() {
    $( "[data-role='navbar']" ).navbar();
    $( "[data-role='header'], [data-role='footer']" ).toolbar();
    
    // Set header left margin
    var pl = $(".ui-content").css("padding-left");    
    $("[data-role='header']").css("margin-left", pl);
    
    // Set page sizes
    resizePage();
});

// Resize page
function resizePage() {
    setPageHeight();
    setHeaderWidth();
}

// Set page height
function setPageHeight() {
    scroll(0, 0);
    var content = $.mobile.getScreenHeight() -
                  $(".ui-header").outerHeight() - $(".ui-footer").outerHeight() -
                  $(".ui-content").outerHeight() + $(".ui-content").height();
    $(".ui-content").height(content);
}

// Set header width
function setHeaderWidth() {
    if ($.mobile.activePage) {
        var id = $.mobile.activePage.attr('id');
        var cid = "#" + id + " .ui-content";
        var w = $(cid).width();
        if (w > 0) {
            $("[data-role='header']").width(w);
            $("[data-role='header']").show();
        }
        else {
            $("[data-role='header']").hide();
        }
    }
    else {
        $("[data-role='header']").hide();
    }
}

// Update the contents of the toolbars
$(document).on("pageshow", "[data-role='page']", function() {
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

$( document ).on( "pagecontainershow", function( event, data ) {
    // Set page sizes
    resizePage();
});

$(window).on("resize orientationchange", function() {
    // Set page sizes
    resizePage();
});

