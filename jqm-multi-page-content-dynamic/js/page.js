
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

function buildPage(num) {
	var s = '';	
	s += '<div data-role="page" id="page_' + num + '" data-title="New Page ' + num + '">';
	s += '<div role="main" class="ui-content main-content">';
	s += '</div>';
	s += '</div>';
	return s;
}

