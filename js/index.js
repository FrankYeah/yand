$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        center: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        URLhashListener: true,
        startPosition: 'URLHash',
        dotsContainer: '.custom-dots',
        responsiveRefreshRate: 0,
        responsive: {
          0: {
            margin: 0,
            autoWidth: false
          },
          992: {
            autoWidth: false
          }
        }

    });

    $('.next').click(function () {
        $(".owl-carousel").trigger('next.owl.carousel')
      
      })

  });