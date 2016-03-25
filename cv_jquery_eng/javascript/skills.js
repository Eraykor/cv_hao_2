$(document).ready(function () {
    $('#skills').click(function () {
        var vide = "";
        $('#view').html(vide);
        $.ajax({
            type: 'GET',
            url: 'view/skills.html',
            complete: function (r) {
                $('#view').html(r.responseText);
                // console.log(r.responseText);
            }
        });
    });
});
