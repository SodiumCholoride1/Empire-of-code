$(document).ready(function() {
    var btns = $(".projects-area .button-group button");

    btns.click(function(e) {
        $(".projects-area .button-group button").removeClass("active");
        e.target.classList.add("active");
        var selector = $(e.target).attr("data-filter");
        $(".projects-area .grid").isotope({
            filter: selector
        });
        return false;
    })

    $(".site-main .client-area .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    })

});