
function addRecord(record, user) {

    var r_date = formatDate(record.eventtime);

    var r_author = formatAuthor(record, user);

    var r_title_id = 'title_' + record.itemid;
    var r_title = formatTitle(record, r_title_id);

    var r_content_id = 'content_' + record.itemid;
    var r_content = formatContent(record, r_content_id);

    var s = '';

    s += '<li class="content-item" data-role="collapsible" data-collapsed="false" data-inset="false"';
    s += ' data-iconpos="right" data-collapsed-icon="carat-r" data-expanded-icon="carat-d">';
    s += '<h2>';
    s += '<table class="title-table">';
    s += '<tr>';
    s += '<td class="avatar-box"><img class="avatar-icon" src="img/avatar.png"/></td>';
    s += '<td class="title-box" valign="top">';
    s += '<div class="title-date">' + r_date + '</div>';
    s += '<div class="title-name" id="' + r_title_id + '">' + r_title + '</div>';
    s += '<div class="title-user">' + r_author + '</div>';
    s += '</td>';
    s += '</tr>';
    s += '</table>';
    s += '</h2>';
    s += '<div id="' + r_content_id + '" class="content-box">' + r_content + '</div>';
    s += '</li>';

    $('#livejournal').append(s);
    $('.content-item').collapsible();
    $('#livejournal').listview('refresh');
}

function formatDate(s) {
    var d = new Date(s);
    return $.format.date(d, "dd MMM yyyy, hh:mm p");
}

function formatAuthor(record, user) {
    if (record.hasOwnProperty('poster')) {
        return record.poster;
    }
    return user;
}

function formatTitle(record, id) {
    if (record.hasOwnProperty('subject')) {
        array_buffer_to_string(record.subject, 
            function (string) {
			    $('#' + id).append(string);
            }
        );
        return '';
    }
    return '.';
}

function formatContent(record, id) {
    if (record.hasOwnProperty('event')) {
        array_buffer_to_string(record.event, 
            function (string) {
			    $('#' + id).append(string);
            }
        );
        return '';
    }
    return '.';
}

function array_buffer_to_string(buf, callback) {

    var bb = new Blob([buf]);
    var f = new FileReader();
    f.onload = function(e) {
        callback(e.target.result)
    }
    f.readAsText(bb);
}


