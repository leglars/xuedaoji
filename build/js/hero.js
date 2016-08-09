/**
 * Created by llegl on 2016/8/3.
 */

$(document).ready(function() {
    setup()
});

$(window).resize(function() {
    resizeElement.setFullSizeHero()

});


function setup() {
    resizeElement.setFullSizeHero()
}

var resizeElement = {
    setFullSizeHero: function () {
        var fullScreenSlider = $('#full-screen-slider')
        if (fullScreenSlider.length) {
            var windowHeight = $(window).height();
            console.log(windowHeight);
            // var windowWidth = $(window).width();
            fullScreenSlider.css({
                'height': windowHeight,
                'width': "100%"
            });

            $('.hero-img').css({
                'height': windowHeight,
                'width:': "100%"
            });
            // if
            // $('#full-screen-slider .hero-container > img').css({
            //     'height': windowHeight,
            //     'width': "100%"
            // })
        }
    },
};