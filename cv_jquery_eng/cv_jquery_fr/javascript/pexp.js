$(document).ready(function () {
    $('#pexp').click(function () {
        var vide = "";
        $('#view').html(vide);
        $.ajax({
            type: 'GET',
            url: 'view/pexp.html',
            complete: function (r) {
                $('#view').html(r.responseText);
                // console.log(r.responseText);
            }
        });
    });
});
