$(function () {
    /**
     * Jquery code to insert header code into a blank <header> tag.
     *
     * Using ejs now, this is not needed!
     */
    // $("header").load("/components/header");

    // Feather Icons
    setTimeout(() => feather.replace(), 500)
    $('#brand-name').hover(
        function () {
            $(this).addClass('animated tada')
        },
        function () {
            $(this).removeClass('animated tada')
        }
    )
    $('.navlink').hover(
        function () {
            $(this).addClass('animated rubberBand')
        },
        function () {
            $(this).removeClass('animated rubberBand')
        }
    )

    if ($('#error')) $('#error').fadeOut(5000)
})
