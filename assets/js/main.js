/************* Main Js File ************************
    Template Name: Durral
    Author: Templatebobo
    Version: 1.0
*************************************************************/


/*------------------------------------------------------------------------------------
    
JS INDEX
=============
01 - Testimonial Carousel JS
02 - Partner Carousel JS
03 - Counter JS
04 - Menu JS
05 - Wow Animation Js
06 - Masonary JS
07 - Email Setup JS

-------------------------------------------------------------------------------------*/


(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        /* 
        =================================================================
        01 - Testimonial Carousel JS
        =================================================================	
        */
        $(".testimonial-slider").owlCarousel({
            autoplay: true,
            loop: true,
            margin: 20,
            touchDrag: true,
            mouseDrag: true,
            nav: true,
            dots: false,
            autoplayTimeout: 6000,
            autoplaySpeed: 1200,
            navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                750: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });

        /* 
        =================================================================
		02 - Partner Carousel JS
		=================================================================	
		*/
        $(".partner-slider").owlCarousel({
            autoplay: true,
            loop: true,
            touchDrag: true,
            mouseDrag: true,
            nav: false,
            dots: false,
            dotsData: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1200,
            margin: 100,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                750: {
                    items: 3
                },
                1000: {
                    items: 6
                },
                1200: {
                    items: 6
                }
            }
        });


        /* 
        =================================================================
        03 - Counter JS
        =================================================================	
        */

        $('.counter').counterUp({
            delay: 15,
            time: 5000
        });


        /* 
        =================================================================
        04 - Menu JS
        =================================================================	
        */
        $(".mainmenu ul li:has(ul)").addClass("has-submenu");
        $(".mainmenu ul li:has(ul)").addClass("small-submenu");
        $(".mainmenu ul li ul").addClass("sub-menu");
        $(".mainmenu ul.dropdown li").hover(function () {
            $(this).addClass("hover")
        }, function () {
            $(this).removeClass("hover")
        });

        var $menu = $("#menu"),
            $menulink = $(".menu-toggle"),
            $menuTriggercont = $(".toggle"),
            $menuTrigger = $(".has-submenu > a");
        $menulink.click(function (e) {
            $menulink.toggleClass("active");
            $menu.toggleClass("active");
            $menuTriggercont.toggleClass("active");
        });

        $menuTrigger.click(function (e) {
            e.preventDefault();
            var t = $(this);
            t.toggleClass("active").next("ul").toggleClass("active")
        });

        /*==============================
		05 - Wow Animation Js
		==============================*/
        new WOW().init();

        /* 
        =================================================================
        06 - Masonary JS
        =================================================================	
        */
        window.onload = function () {

            var $container = $(".masonry");
            $container.masonry({
                percentPosition: true
            });
        }

    });

    /* 
    =================================================================
    07 - Email Setup JS
    =================================================================	
    */
    $("#contact-form").on('submit', function (e) {
        e.preventDefault();

        //Get input field values from HTML form
        var user_name = $("input[name=name]").val();
        var user_email = $("input[name=email]").val();
        var user_subject = $("input[name=subject]").val();
        var user_phone = $("input[name=phone]").val();
        var user_message = $("textarea[name=message]").val();

        //Data to be sent to server
        var post_data;
        var output;
        post_data = {
            'user_name': user_name,
            'user_email': user_email,
            'user_subject': user_subject,
            'user_message': user_message
        };

        //Ajax post data to server
        $.post('assets/email/contact_form.php', post_data, function (response) {

            //Response server message
            if (response.type == 'error') {
                output = '<div class="alert alert-danger"><i class="fa fa-exclamation" aria-hidden="true"></i><span class="notification-text">' + response.text + '</span></div>';
            } else {
                output = '<div class="alert alert-info"><i class="fa fa-check" aria-hidden="true"></i><span class="notification-text">' + response.text + '</span></div>';

                //If success clear inputs
                $("input, textarea").val('');
            }

            $("#notification").html(output);

            $(".notification").delay(15000).queue(function (next) {
                $(this).addClass("scale-out");
                next();
            });
            $(".notification").on("click", function () {
                $(this).addClass("scale-out");
            });

        }, 'json');
    });


}(jQuery));
