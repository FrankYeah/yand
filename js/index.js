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

    // menu 開關
    $('#page_one_close_div').click(function(){
      $('#page_one_menu_click_bar').css('display','none');
    })

    $('#page_one_menu_icon').click(function(){
      $('#page_one_menu_click_bar').css('display','block');
    })

    // mouseover
    $('.page-one-content-one').mouseover(function(){
      $('.page-one-menu-arrow-one').css('display','block');
    })

    $('.page-one-content-one').mouseleave(function(){
      $('.page-one-menu-arrow-one').css('display','none');
    })

    $('.page-one-content-two').mouseover(function(){
      $('.page-one-menu-arrow-two').css('display','block');
    })

    $('.page-one-content-two').mouseleave(function(){
      $('.page-one-menu-arrow-two').css('display','none');
    })

    $('.page-one-content-three').mouseover(function(){
      $('.page-one-menu-arrow-three').css('display','block');
    })

    $('.page-one-content-three').mouseleave(function(){
      $('.page-one-menu-arrow-three').css('display','none');
    })

    $('.page-one-content-four').mouseover(function(){
      $('.page-one-menu-arrow-four').css('display','block');
    })

    $('.page-one-content-four').mouseleave(function(){
      $('.page-one-menu-arrow-four').css('display','none');
    })

    $('.page-one-content-five').mouseover(function(){
      $('.page-one-menu-arrow-five').css('display','block');
    })

    $('.page-one-content-five').mouseleave(function(){
      $('.page-one-menu-arrow-five').css('display','none');
    })


  });