/**
 * Created by llegl on 2016/8/3.
 */

$(document).ready(function() {
    setup()
});

$(window).resize(function() {
    redimensionHero();
});


function setup() {
    startFullSizeHero()
}

function startFullSizeHero() {
    if ($('#full-screen-slider').length) {
        var windowHeight = $(window).height();
        console.log(windowHeight);
        // var windowWidth = $(window).width();
        $('#full-screen-slider').css({
            'height': windowHeight,
            'width': "100%"
        });

        $('#full-screen-slider .hero-container > img').css({
            'height': windowHeight,
            'width': "100%"
        })
    }
}

function redimensionHero() {}