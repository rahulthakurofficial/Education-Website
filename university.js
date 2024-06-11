// carousel
document.addEventListener("DOMContentLoaded", function() {
    var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
    if (myCarousel) {
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 3000,
            wrap: true
        });
    }
});


