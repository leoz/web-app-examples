
// Navigation

function setActions() {
	$('#btn_last').click(function() { onLast(); });
	$('#btn_next').click(function() { onNext(); });
	$('#btn_new').click(function() { onNew(); });
	$('#btn_prev').click(function() { onPrev(); });
	$('#btn_first').click(function() { onFirst(); });
}

function setButtons() {
    if (canDoNext()) {
		$('#btn_next').prop('disabled', true).removeClass('ui-disabled');
		$('#btn_last').prop('disabled', true).removeClass('ui-disabled');
    }
	else {
		$('#btn_next').prop('disabled', true).addClass('ui-disabled');
		$('#btn_last').prop('disabled', true).addClass('ui-disabled');
	}
    if (canDoPrev()) {
		$('#btn_prev').prop('disabled', true).removeClass('ui-disabled');
		$('#btn_first').prop('disabled', true).removeClass('ui-disabled');
    }
	else {
		$('#btn_prev').prop('disabled', true).addClass('ui-disabled');
		$('#btn_first').prop('disabled', true).addClass('ui-disabled');
	}
    setMoreButton();
}

function setMoreButton() {
    if (canDoMore()) {
		$('#btn_new').prop('disabled', true).removeClass('ui-disabled');
    }
    else {
		$('#btn_new').prop('disabled', true).addClass('ui-disabled');
    }
}

function activePage() {
    return $.mobile.pageContainer.pagecontainer('getActivePage');
}

function onPrev() {
    if (canDoPrev()) {
		$.mobile.pageContainer.pagecontainer('change', activePage().prev('[data-role=page]'), {
			transition: 'slide'
		});
	}
}

function onFirst() {
    if (canDoPrev()) {
	    $.mobile.pageContainer.pagecontainer('change', activePage().prevAll('[data-role=page]').last(), {
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
}

function onLast() {
    if (canDoNext()) {
	    $.mobile.pageContainer.pagecontainer('change', activePage().nextAll('[data-role=page]').last(), {
		    transition: 'slide',
		    reverse: true
	    });
	}
}

function canDoNext() {
	return (!isInTransition() && activePage().next('[data-role=page]').length !== 0);
}

function canDoPrev() {
	return (!isInTransition() && activePage().prev('[data-role=page]').length !== 0);
}

function canDoMore() {
	return (window.lj_conf.number == window.lj_conf.count);
}

function isInTransition() {
	return ($('body.ui-mobile-viewport-transitioning').length !== 0);
}

