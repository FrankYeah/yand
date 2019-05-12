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
    $('#page_one_close_div').click(closeMenu)
    $('#page_one_menu_icon').click(openMenu)

    function openMenu(){
      $('#page_one_menu_click_bar').css('visibility','visible');
      $('#page_one_menu_click_bar').css('opacity','1');
      $('#page_one_menu_click_bar').css('width','48%');
      $('#page_one_menu_click_bar').css('transition','width 0.6s ease 0s');
    }

    function closeMenu(){
      setTimeout(function(){
        $('#page_one_menu_click_bar').css('visibility','hidden')
      },600)
      $('#page_one_menu_click_bar').css('opacity','0.9');
      $('#page_one_menu_click_bar').css('width','10%');
      $('#page_one_menu_click_bar').css('transition','width 0.6s ease 0s');
    }

    // menu mouseover

    $('#page_one_menu_icon').mouseover(function(){
      $('.page-one-menu-line-long').css('width','10px');
      $('.page-one-menu-line-short').css('width','20px');
      $('.page-one-menu-line-short').css('margin','5px');
    })

    $('#page_one_menu_icon').mouseleave(function(){
      $('.page-one-menu-line-long').css('width','20px');
      $('.page-one-menu-line-short').css('width','10px');
      $('.page-one-menu-line-short').css('margin','5px 5px 5px 15px');
    })

    // menu content mouseover
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