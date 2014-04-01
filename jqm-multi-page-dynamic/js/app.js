
// Application

$(function() {
    $( '[data-role="navbar"]' ).navbar();
    $( '[data-role="header"], [data-role="footer"]' ).toolbar();
	// Set button actions
	setActions();
});

$( document ).on( 'pageshow', '[data-role="page"]', function() {
	// Set title
    var title = $( this ).jqmData('title');
    $('[data-role="header"] h1').text( title );
	// Enable/disable buttons
	setButtons();
});

