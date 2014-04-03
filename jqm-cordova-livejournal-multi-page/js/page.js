
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
	s += '<div data-role="page" id="page_' + num + '" data-title="New Page ' + num + '">';
	s += '<div role="main" class="ui-content main-content">';
	s += '<ul data-role="listview" class="livejournal"></ul>';
	s += '</div>';
	s += '</div>';
	return s;
}

