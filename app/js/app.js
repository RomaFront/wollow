$(document).ready(function() {

    // ===============================
    // Loader
    // ===============================
    $(window).on('load', function() {
        $(".load").delay(500).fadeOut(300);
    });

	// ===============================
	// Modal Window
	// ===============================
    $(".btn").click(function(e) {
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({ "display": "block" });
    });

    $(".modal-sandbox").click(function() {
        $(".modal").css({ "display": "none" });
    });

    // ===============================
    // Carousel
    // ===============================
    $('.owl-carousel').owlCarousel({
        loop:true,
        item: 3,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true
            },
            600:{
                items:2,
                nav:false,
                dots:true
            },
            992:{
                item:3
            }
        }
    });
    
    // ===============================
    // ScrollMagic
    // ===============================

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: '.intro-tagline h1',
            triggerHook: 0.9
        })
        
        .setClassToggle('.intro-tagline h1', 'fade-in')
        .addTo(controller);

        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: '.intro-tagline h6',
            triggerHook: 0.9
        })
        
        .setClassToggle('.intro-tagline h6', 'fade-in')
        .addTo(controller);

        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: '.intro-tagline p',
            triggerHook: 0.9
        })
        
        .setClassToggle('.intro-tagline p', 'fade-in')
        .addTo(controller);



    $('#box1').each(function() {

        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.9
        })
        
        .setClassToggle('#box1', 'fade-in')
        .addTo(controller);

    });

    $('#box2').each(function() {

        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.9
        })
        
        .setClassToggle('#box2', 'fade-in')
        .addTo(controller);

    });

    $('.card1').each(function() {
        // build a scene card1
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.9
        })
        .setClassToggle('.card1', 'fade-in')
        .addTo(controller);
    })

    $('.card2').each(function() {
        // build a scene card1
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.9
        })
        .setClassToggle('.card2', 'fade-in')
        .addTo(controller);
    })

    $('.card3').each(function() {
        // build a scene card1
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.9
        })
        .setClassToggle('.card3', 'fade-in')
        .addTo(controller);
    })

        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: '.system-big',
            triggerHook: 0.9
        })
        
        .setClassToggle('.system-big', 'fade-in')
        .addTo(controller);

        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: '.system-small',
            triggerHook: 0.9
        })
        
        .setClassToggle('.system-small', 'fade-in')
        .addTo(controller);

});
    