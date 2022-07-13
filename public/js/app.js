function registerValidate() {
    if (checkUsername()) {
        return true;
    }
    return false;
}

function checkUsername() {
    const username = document.querySelector('#username');
    const regex = /^[a-z0-9]{1,}$/;
    if (regex.test(username.value)) {
        // username.classList.add('is-valid');
        // username.classList.remove('is-invalid');
        return true;
    }
    // username.classList.add('is-invalid');
    // username.classList.remove('is-valid');
    return false;
}