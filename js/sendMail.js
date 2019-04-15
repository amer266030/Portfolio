function sendMail() {
    var name = $('#contact #name').val();
    var email = $('#contact #email').val();
    var message = $('#contact textarea').val();
    window.location.href = 'mailto:mail@company.com?subject=The subject - ' + name + ' (' + email + ')' + '&body=' + message;
};