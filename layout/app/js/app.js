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
});
    