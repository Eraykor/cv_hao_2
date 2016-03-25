$(document).ready(function () {
    $('#formation').click(function () {
        var vide = "";
        $('#view').html(vide);
        $.ajax({
            type: 'GET',
            url: 'view/formation.html',
            complete: function (r) {
                $('#view').html(r.responseText);
                // console.log(r.responseText);
            }
        });
    });
});
