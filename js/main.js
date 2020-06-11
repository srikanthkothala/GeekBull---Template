/*--------------------------------------------------
Template Name: Smarto;
Description: Creative Portfolio Bootstrap 4 Template;


NOTE: main.js, All custom script and plugin activation script in this file. 
-----------------------------------------------------

    JS INDEX
    ================================================
    1. Mobile Menu Activation
    2. Trigger Menu Activation
    3. Parallax js Activation
    4. Sticky-Menu Activation
    5. Magnific Popup Activation
    6. Image loade with isotop Activation
    7. wow js Activation
    8. video palyer Activation
    9. Brand Logo  Activation
    10. Testmonial Activation
    11. ScrollUp Activation
    
================================================*/

(function ($) {
    "use Strict";

    /*----------------------------
    1. Mobile Menu Activation
    -----------------------------*/
    jQuery('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
    });
    
    /*----------------------------
    2. Trigger Menu Activation
    -----------------------------*/
    var slideMenu = function (container, trigger) {
        var slideMenuContainer = container;
        var slideMenutrigger = trigger;
        $(slideMenutrigger).on('click', function () {
            $(this).toggleClass('is-active')
                .siblings(slideMenuContainer).toggleClass('is-visible');
        });
    };
    var slidemenu1 = new slideMenu('.slide-menu-inner', '.trigger-menu .trigger-menu-icon');


    /*----------------------------
     3. Parallax js Activation
     -----------------------------*/
    $('.parallax-window').parallax("50%", 0.5);
    
    /*----------------------------
    4. Sticky-Menu Activation
    ------------------------------ */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header-sticky').addClass("sticky");
        } else {
            $('.header-sticky').removeClass("sticky");
        }
    });

    /*----------------------------
    5. Magnific Popup Activation
    ------------------------------ */
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });

    /*--------------------------------------
    6. Image loade with isotop Activation
    ---------------------------------------- */
    $('.masonry').imagesLoaded(function () {

        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function () {
            $('.portfolio-menu button').removeClass('active');
            $(this).addClass('active');

            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        })
    });

    /*--------------------------------------
    7. wow js Activation
    ---------------------------------------- */
    new WOW().init();

    /*--------------------------------------
    8. video palyer Activation
    ---------------------------------------- */
    jQuery("#video-active").YTPlayer();

    /*----------------------------------------------------
    9. Brand Logo  Activation
    -----------------------------------------------------*/
    $('.brand-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        dots: false,
        smartSpeed: 500,
        margin: 0,
        responsive: {
            0: {
                items: 1,
            },
            380: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })

    /*----------------------------------------------------
    10. Testmonial Activation
    -----------------------------------------------------*/
    $('.testmonial-active').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 500,
        margin: 0,
        items: 1
    })

    /*----------------------------
    11. ScrollUp Activation
    -----------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '550', // Distance from top before showing element (px)
        topSpeed: 1000, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        scrollSpeed: 900,
        animationInSpeed: 1000, // Animation in speed (ms)
        animationOutSpeed: 1000, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

})(jQuery);