
$(document).on('click', '#btn_camera', function () { captureImage(); });

function captureSuccess(mediaFiles) {
    var i, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        showFile(mediaFiles[i]);
    }
}

function captureError(error) {
    var msg = 'An error occurred during capture: ' + error.code;
    navigator.notification.alert(msg, null, 'Error');
}

function captureImage() {
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
}

function showFile(mediaFile) {
    var path = mediaFile.fullPath,
        name = mediaFile.name;
    $("#image_source").attr("src", path);
    $("#image_name").text(name);
}

