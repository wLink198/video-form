function isValidVideoID() {
    var isValid = true;

    var videoID = document.getElementById("id").value;

    if (videoID.length < 10) {
        document.getElementById("id-error").innerHTML = "* Vui lòng nhập ít nhất 10 ký tự";
        document.getElementById("id-error").className = "msg-error";
        isValid = false;
    }
    else {
        document.getElementById("id-error").innerHTML = "Ngon trym";
        document.getElementById("id-error").className = "msg-success";
    }
    return isValid;
}

function isValidVideoName() {
    var isValid = true;

    var videoName = document.getElementById("name").value;

    if (videoName.length < 3) {
        document.getElementById("name-error").innerHTML = "* Vui lòng nhập ít nhất 3 ký tự";
        document.getElementById("name-error").className = "msg-error";
        isValid = false;
    }
    else if (videoName.length > 50) {
        document.getElementById("name-error").innerHTML = "* Vui lòng nhập không quá 50 ký tự";
        document.getElementById("name-error").className = "msg-error";
        isValid = false;
    }
    else {
        document.getElementById("name-error").innerHTML = "Ngon trym";
        document.getElementById("name-error").className = "msg-success";
    }
    return isValid;
}

function isValidForm() {
    var validVideoName = isValidVideoName();
    var validVideoID = isValidVideoID();

    var isValid = (validVideoID && validVideoName);

    return isValid;
}