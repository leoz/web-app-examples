
function getRSS(url, container, num) {
    var source = '';
    source += document.location.protocol;
    source += '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=';
    source += num;
    source += '&callback=?&q=';
    source += encodeURIComponent(url);

    $.ajax({
        url: source,
        dataType: 'json',
        success: function(data) {
            $.each(data.responseData.feed.entries, function(key, value) {
                var s = '';
                s += '<li>';
                s += '<table class="title-table">';
                s += '<tr>';
                s += '<td class="avatar-box"><img class="avatar-icon" src="img/avatar.png"/></td>';
                s += '<td class="title-box" valign="top">';
                s += '<div class="title-name">' + (value.title ? value.title : '.') + '</div>';
                s += '<div class="title-user">' + value.author + '</div>';
                s += '</td>';
                s += '<td class="date-box" valign="top">' + formatDate(value.publishedDate) + '</td>';
                s += '</tr>';
                s += '</table>';
                s += '<div class="content-box">' + value.content + '</div>';
                s += '</li>';
                
                $(container).append(s);
                $(container).listview('refresh');
            });
        }
    });
}

function formatDate(s) {
    var d = new Date(s);
    return $.format.date(d, "dd MMM yyyy - hh:mm p");
}

