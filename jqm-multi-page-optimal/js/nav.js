
// Navigation

function setActions() {
	$('#btn_last').click(function() { onLast(); });
	$('#btn_next').click(function() { onNext(); });
	$('#btn_prev').click(function() { onPrev(); });
	$('#btn_first').click(function() { onFirst(); });
	$('#btn_close').click(function() { onClose(); });
}

function setButtons() {
    if (canDoNext()) {
		$('#btn_last').prop('disabled', true).removeClass('ui-disabled');
    }
	else {
		$('#btn_last').prop('disabled', true).addClass('ui-disabled');
	}
    if (canDoPrev()) {
		$('#btn_first').prop('disabled', true).removeClass('ui-disabled');
    }
	else {
		$('#btn_first').prop('disabled', true).addClass('ui-disabled');
	}
}

// Page Access

function activePage() {
    return $.mobile.pageContainer.pagecontainer('getActivePage');
}

function getFirst() {
    return activePage().prevAll('[data-role=page]').last();
}

function getLast() {
    return activePage().nextAll('[data-role=page]').last();
}

// Button Actions

function onPrev() {
    if (canDoPrev()) {
		$.mobile.pageContainer.pagecontainer('change', activePage().prev('[data-role=page]'), {
			transition: 'slide'
		});
	}
    else {
        showFirstPage();
    }
}

function onFirst() {
    if (canDoPrev()) {
	    $.mobile.pageContainer.pagecontainer('change', getFirst(), {
		    transition: 'slide'
	    });
	}
}

function onNext() {
    if (canDoNext()) {
		$.mobile.pageContainer.pagecontainer('change', activePage().next('[data-role=page]'), {
			transition: 'slide',
			reverse: true
		});
	}
    else {
        showLastPage();
    }
}

function onLast() {
    if (canDoNext()) {
	    $.mobile.pageContainer.pagecontainer('change', getLast(), {
		    transition: 'slide',
		    reverse: true
	    });
	}
}

$(document).on('swipeleft swiperight', '[data-role=page]', function (e) {
    if (e.type == 'swipeleft') {
        onPrev();
    }
    if (e.type == 'swiperight') {
        onNext();
    }
});

function onClose() {
    $('[data-role="page"]').remove();
    $('[data-role="header"] h1').text( ' - ' );
    showInitialPage();
	setButtons();
}

function canDoNext() {
	return (!isInTransition() && activePage().next('[data-role=page]').length !== 0);
}

function canDoPrev() {
	return (!isInTransition() && activePage().prev('[data-role=page]').length !== 0);
}

function isInTransition() {
	return ($('body.ui-mobile-viewport-transitioning').length !== 0);
}

