function loadEvents() {
    var mailString;
    function updateMailString() {
        mailString = '?subject=' + encodeURIComponent($('#name').val())
            + '&body=' + encodeURIComponent($('#message').val());
        $('#email').attr('href',  'mailto:hanaasiddiqui@yahoo.com' + mailString);
    }
    $( "#name" ).focusout(function() { updateMailString(); });
    $( "#message" ).focusout(function() { updateMailString(); });
    updateMailString();
}