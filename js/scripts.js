'use strict';

function Tabs() {
    var bindAll = function() {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    var clear = function() {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    }

    var change = function(e) {
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    }

    bindAll();
}

var connectTabs = new Tabs();

$(document).ready(function() {
    $('.slider-place').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         arrows: false,
            //         centerMode: true,
            //         centerPadding: '40px',
            //         slidesToShow: 1
            //     }
            // }
        ]
    });

});

$(document).ready(function() {
    $('.slide-norway').slick({
        arrows: true,
        dots: true,
        nextArrow: ' <i class="slick-next fa-chevron-right"></i>',
        prevArrow: '<i class="slick-prev fa-chevron-left"></i>',
        loop: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

});
$(document).ready(function() {
    $('.slick-honeymoon').slick({
        slidesToShow: 2,
        // slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
    });

});
(document).ready(function() {
    $('.slick-descriptin').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
    });

});