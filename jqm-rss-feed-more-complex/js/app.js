$(function() {
    $( "[data-role='header'], [data-role='footer']" ).toolbar();
});

$(document).on('pageshow', '#main_page', function() {
    getRSS('http://leoz-net.livejournal.com/data/rss', '#livejournal', 17);
});

