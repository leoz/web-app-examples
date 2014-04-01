
// Create New Page

var i = 0;

function onNew() {
    i++;
    var page = buildPage(i);
    if (!canDoNext()) {
        activePage().after(page);
    } else {
        activePage().nextAll('[data-role=page]').last().after(page);
    }
	$.mobile.pageContainer.pagecontainer('change', activePage().nextAll('[data-role=page]').last(), {
		transition: 'slide',
		reverse: true
	});
}

function buildPage(num) {
	var s = '';	
	s += '<div data-role="page" id="page_' + num + '" class="wae-page" data-title="New Page ' + num + '">';
	s += '<div role="main" class="ui-content wae-content">';
	s += '<div class="ui-corner-all custom-corners">';
	s += '<div class="ui-bar ui-bar-a">';
	s += '<h3>Page ' + num + ' Content</h3>';
	s += '</div>';
	s += '<div class="ui-body ui-body-a">';
	s += '<p>';
	s += 'This is a dynamic page number ' + num;
	s += '</p>';
	s += '</div>';
	s += '</div>';
	s += '</div>';
	s += '</div>';
	return s;
}

