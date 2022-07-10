$(function () {
    $('.btn-trigger').on('click', function () {
        $(this).toggleClass('active');
        $("#h-nav").toggleClass('panelactive');
    });
});
