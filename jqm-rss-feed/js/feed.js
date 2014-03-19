
function getRSS(url, container, num) {
    var source = "";
    source += document.location.protocol;
    source += '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=';
    source += num;
    source += '&callback=?&q=';
    source += encodeURIComponent(url);

    $.ajax({
        url: source,
        dataType: 'json',
        success: function(data) {
            $.each(data.responseData.feed.entries, function(key, value){
                //console.log(value);
                
                var s = '';
                s += '<li>';
                s += '<h2>' + value.author + '</h2>';
                s += '<p><strong>' + (value.title ? value.title : '.' ) + '</strong></p>';
                s += '<div class="entry_content">' + value.content + '</div>';
                s += '<p class="ui-li-aside"><strong>' + value.publishedDate + '</strong></p>';
                s += '</li>';
                
                $(container).append(s);
                $(container).listview("refresh");
            });
        }
    });
}

