$(function() {
    $( "[data-role='header'], [data-role='footer']" ).toolbar();
});

$(document).on('pageshow', '#main_page', function() {
    $.livejournal.getevents('leoz-net', 27, addRecord);
});

