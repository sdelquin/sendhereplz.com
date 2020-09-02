$(function () {
    // cache DOM
    const $window = $(window)
    const $html = $('html, body')
    const $team = $('.card-team > *')
    const $scrollLinks = $('a.page-scroll')
    const $nav = $('.sticky-navigation')
    const $scrollTopButton = $('.scroll-top')

    // randomize team order
    $team.toArray().sort(() => Math.random() - 0.5).forEach((element, index) => {
        element.style.order = index
    })

    //page scroll
    $scrollLinks.on('click', function (event) {
        const $anchor = $(this);
        $html.stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000);
        event.preventDefault();
    });

    //toggle scroll menu
    $window.on('scroll', function () {
        const scroll = $window.scrollTop();
        //adjust menu background
        if (scroll >= 100) {
            $nav.addClass('navbar-shadow');
        } else {
            $nav.removeClass('navbar-shadow');
        }

        // adjust scroll to top
        if (scroll >= 600) {
            $scrollTopButton.addClass('active');
        } else {
            $scrollTopButton.removeClass('active');
        }
        return false;
    });

    // scroll top top
    $scrollTopButton.on('click', function () {
        $html.stop().animate({
            scrollTop: 0
        }, 1000);
    });
});