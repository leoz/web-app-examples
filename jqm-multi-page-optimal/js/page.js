
// Show Page

function showInitialPage() {
    var page = buildPage();
    createInitialPage(page);
}

function showLastPage() {
    removeFirstPage();

    var page = buildPage();

    if (activePage().is(':visible')) {
        createLastPage(page);
    }
    else {
        createInitialPage(page);
    }
}

function showFirstPage() {
    removeLastPage();

    var page = buildPage();

    if (activePage().is(':visible')) {
        createFirstPage(page);
    }
    else {
        createInitialPage(page);
    }
}

// Create Pages

function createInitialPage(data) {
    var p = $(data);
    p.appendTo($.mobile.pageContainer);
    $.mobile.pageContainer.pagecontainer('change', p, {
        transition: 'none'
    });
}

function createFirstPage(data) {
    if (!canDoPrev()) {
        activePage().before(data);
    } else {
        getFirst().before(data);
    }
    $.mobile.pageContainer.pagecontainer('change', getFirst().last(), {
	    transition: 'slide'
    });
}

function createLastPage(data) {
    if (!canDoNext()) {
        activePage().after(data);
    } else {
        getLast().after(data);
    }
    $.mobile.pageContainer.pagecontainer('change', getLast().last(), {
        transition: 'slide',
        reverse: true
    });
}

// Remove Pages

var max_pages = 5;

function removeFirstPage() {
    if (max_pages <= $('[data-role=page]').length) {
        var page = getFirst();
        if(page.length === 0) {
            page = activePage();
            var active_page = page.next('[data-role=page]');
	        $.mobile.pageContainer.pagecontainer('change', active_page, {
		        transition: 'none'
	        });

        }
        page.remove();
    }
}

function removeLastPage() {
    if (max_pages <= $('[data-role=page]').length) {
        var page = getLast();
        if(page.length === 0) {
            page = activePage();
            var active_page = page.prev('[data-role=page]');
	        $.mobile.pageContainer.pagecontainer('change', active_page, {
		        transition: 'none'
	        });

        }
        page.remove();
    }
}

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

var num = 0;

function buildPage() {
    num++;
	var s = '';	
	s += '<div data-role="page" id="page_' + num + '" data-title="New Page ' + num + '">';
	s += '<div role="main" class="ui-content main-content">';
	s += '</div>';
	s += '</div>';
	return s;
}



