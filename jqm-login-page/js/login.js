
$(document).on('pageshow', '#login_page', function() { centerContent(); });
$(document).on('pagebeforeshow', '#login_page', function() { cleanInput(); });
$(document).on('input', '.login-input', function() { checkInput(); });
$(document).on('click', '#login-button', function() { logIn(); });


function centerContent() {
    $('#login-content').css('margin-top',($(window).height() - $('[data-role=header]').height() - $('[data-role=footer]').height() - $('#login-content').outerHeight())/2);
}

function cleanInput() {
	$('#login-username').val('');
	$('#login-password').val('');
	$('#login-button').addClass('ui-disabled');
}

function checkInput() {
	var username = $('#login-username').val();
	var password = $('#login-password').val();
	if(username != '' && password != '') {
		$('#login-button').removeClass('ui-disabled');
	}
	else {
		$('#login-button').addClass('ui-disabled');
	}
}

function logIn() {
    $.mobile.changePage('main.html', { transition: 'flip', changeHash: false });
}

