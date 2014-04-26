
// Application

$(function() {
    $('[data-role="navbar"]').navbar();
    $('[data-role="header"], [data-role="footer"]').toolbar();
    $('[data-role="panel"]').panel();
    $('.ui-panel-inner').trigger('create');
	// Set button actions
	setActions();
	onClose();
});

$(document).on('pagecontainerbeforeshow', function(e, ui) {
	// Set title
    var title = activePage().jqmData('title');
    $('[data-role="header"] h1').text( title );
});

$(document).on('pagechange', function(e) {
	// Enable/disable buttons
	setButtons();
});

$(document).on('pagecreate', '[data-role=page]', function(e) {
    var id = $(this).attr('id');
    $('#' + id + ' .main-content').append(buildContent(id));
});

// Create Page Content

function buildContent(id) {
	var s = '';	
	s += '<div class="ui-corner-all custom-corners">';
	s += '<div class="ui-bar ui-bar-a">';
	s += '<h3>Page ' + id + ' Content</h3>';
	s += '</div>';
	s += '<div class="ui-body ui-body-a">';
	s += '<p>';
	s += 'This page is - ' + id;
	s += '</p>';
	s += '</div>';
	s += '</div>';
	return s;
}
