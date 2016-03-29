$(document).ready(function () {
    $('#homer').click(function () {
        $.ajax({
            type: 'GET',
            url: 'view/home.html',
            complete: function (r) {
                $('#view').html(r.responseText);
                // console.log(r.responseText);
            }
        });
    });
});

function home_onload() {
    $.ajax({
        type: 'GET',
        url: 'view/home.html',
        complete: function (r) {
            $('#view').html(r.responseText);
        }
    });
}
