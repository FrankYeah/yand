$(document).ready(function(){
    // document.location.href="#slide1";
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


    // slide oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
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

    // 開頭淡入效果
    $('.page-one-left-top-bar').css('left', '0');
    $('.page-one-left-bottom-bar').css('left', '0');
    $('.page-one-bottom-dot').css('left', '4%');
    $('.page-one-right-top-bar').css('right', '0');
    $('.page-one-right-bottom-bar').css('right', '0');
    $('.page-one-scroll').css('right', '7%');
    $('.page-one-menu-icon').css('right', '3%');


    // slide oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    $('.next').click(function () {
      $('.page-two-left-top-bar').css('left', '0');
      $('.page-two-left-bottom-bar').css('left', '0');
      $('.page-two-left-bottom-bar').css('opacity', '1');
      $('.page-two-bottom-dot').css('left', '2%');
      $('.page-two-bottom-dot').css('opacity', '1');
      $('.page-two-left-pagination').css('left', '6%');
      $('.page-two-left-pagination').css('opacity', '1');
      $('.page-two-right-top-bar').css('right', '0');
      $('.page-two-right-product-bar').css('right', '0');
      $('.page-two-right-product-bar').css('opacity', '1');
      $('.page-two-right-bottom-scroll-barr').css('right', '5%');
      $('.page-two-right-bottom-scroll-bar').css('opacity', '1');
    })

    
    // $('.page-two-left-top-bar').css('left', '0');

    $('.next-two').click(function () {
      $('.page-three-left-top-bar').css('left', '0');
      $('.page-three-left-bottom-bar').css('left', '0');
      $('.page-three-left-bottom-bar').css('opacity', '1');
      $('.page-three-bottom-dot').css('left', '2%');
      $('.page-three-bottom-dot').css('opacity', '1');
      $('.page-three-right-pagination').css('right', '19.5%');
      $('.page-three-right-pagination').css('opacity', '1');
      $('.page-three-right-top-bar').css('right', '0');
      $('.page-three-right-bottom-bar').css('right', '0');
      $('.page-three-right-product-bar').css('left', '7%');
      $('.page-three-right-product-bar').css('opacity', '1');
      $('.page-three-right-bottom-scroll-barr').css('right', '5%');
      $('.page-three-right-bottom-scroll-bar').css('opacity', '1');
    })










  });