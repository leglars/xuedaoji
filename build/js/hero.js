/**
 * Created by llegl on 2016/8/3.
 */
'use strict'


$(document).ready(function() {
    setup()
});

$(window).resize(function() {
    if ($(window).width() > 768) {
        resizeElement.setAboutUsFullSize();
        resizeElement.setOurTeamFullSize();
        resizeElement.changeToNormalNavbar();
    } else {
        resizeElement.resetOtherSectionsHeight();
        resizeElement.changeToFixNavbar();
    }
    resizeElement.setFullSizeHero();
});


function setup() {
    if ($(window).width() > 768) {
        resizeElement.setAboutUsFullSize();
        resizeElement.setOurTeamFullSize();
        resizeElement.changeToNormalNavbar();
    }
    else {
        resizeElement.changeToFixNavbar();
    }
    resizeElement.setFullSizeHero();
}

var resizeElement = {
    setFullSizeHero: function () {
        var fullScreenSlider = $("#full-screen-slider");
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

    setAboutUsFullSize: function() {
        var aboutUs = $("#aboutUs"),
            windowHeight = $(window).height();
        if (windowHeight > 700) {
            aboutUs.css({
                'height': windowHeight,
                'width': "100%"
            });
        }else {
            aboutUs.css({
                'height': 700,
                'width': "100%"
            });
        }
    },

    setOurTeamFullSize: function() {
        var ourTeam = $("#ourTeam"),
            windowHeight = $(window).height();
        if (windowHeight > 700) {
            ourTeam.css({
                'height': windowHeight,
                'width': "100%"
            });
        }else {
            ourTeam.css({
                'height': 700,
                'width': "100%"
            });
        }
    },

    resetOtherSectionsHeight: function() {
        var aboutUs = $("#aboutUs"),
            ourTeam = $("#ourTeam");
        aboutUs.css({
            'height': 'auto'
        });
        ourTeam.css({
            'height': 'auto'
        })
    },
    
    changeToFixNavbar: function() {
        $("#addNavFix").addClass('fix');
    },
    
    changeToNormalNavbar: function() {
        $("#addNavFix").removeClass('fix');
    }
};