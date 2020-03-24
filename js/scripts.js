'use strict';

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    document.getElementById('header-menu').style.backgroundColor = scrolled == 0 ? "rergba(0, 0, 0, 0.081)" : "rgba(0, 0, 0, 0.251)";
}

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


    $('.slide-norway').slick({
        arrows: true,
        dots: true,
        // nextArrow: ' <i class="slick-next fa-chevron-right"></i>',
        // prevArrow: '<i class="slick-prev fa-chevron-left"></i>',
        loop: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

});
$(document).ready(function() {
    $('.slide-honeymoon').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
    });

});
$(document).ready(function() {
    $('.slider-descriptin').slick({
        // slidesToShow: 1,
        arrows: true,
        dots: false,
    });
});



$('.slide-hurry').slick({
    arrows: true,
    dots: false,
});

// $('.slide-blog').slick({

//     // arrows: false,
//     dots: false,
//     slidesToShow: 3,
//     // slidesToScroll: 1,
//     // autoplay: true,
//     // autoplaySpeed: 5000,
// });

// counter
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "January 01 2030 00:00:00 GMT+0300";
var deadline = new Date(Date.parse(new Date()) + 365 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);