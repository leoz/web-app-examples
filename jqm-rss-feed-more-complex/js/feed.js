
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

                s += '<li class="content-item" data-role="collapsible" data-collapsed="false" data-inset="false"';
                s += ' data-iconpos="right" data-collapsed-icon="carat-r" data-expanded-icon="carat-d">';
                s += '<h2>';
                s += '<table class="title-table">';
                s += '<tr>';
                s += '<td class="avatar-box"><img class="avatar-icon" src="img/avatar.png"/></td>';
                s += '<td class="title-box" valign="top">';
                s += '<div class="title-date">' + formatDate(value.publishedDate) + '</div>';
                s += '<div class="title-name">' + (value.title ? value.title : '.') + '</div>';
                s += '<div class="title-user">' + value.author + '</div>';
                s += '</td>';
                s += '</tr>';
                s += '</table>';
                s += '</h2>';
                s += '<div class="content-box">' + value.content + '</div>';
                s += '</li>';
               
                $(container).append(s);
                $('.content-item').collapsible();
                $(container).listview('refresh');
            });
        }
    });
}

function formatDate(s) {
    var d = new Date(s);
    return $.format.date(d, "dd MMM yyyy, hh:mm p");
}

