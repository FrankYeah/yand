$(document).ready(function(){
    document.location.href="#slide1";
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        center: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        margin: 0,
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
      $('#page_one_menu_click_bar').css('fontSize','16px');
      $('.page-one-social').css('opacity','1');
      $('.page_one_close_div').css('opacity','1');
      $('#page_one_menu_click_bar').css('transition','width 0.6s ease 0s');
    }

    function closeMenu(){
      setTimeout(function(){
        $('#page_one_menu_click_bar').css('visibility','hidden')
      },600)
      $('#page_one_menu_click_bar').css('opacity','0.9');
      $('#page_one_menu_click_bar').css('width','10%');
      $('#page_one_menu_click_bar').css('fontSize','0px');
      $('.page-one-social').css('opacity','0');
      $('.page_one_close_div').css('opacity','0');
      $('#page_one_menu_click_bar').css('transition','width 0.6s ease 0s');
    }

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
    $('.page-one-bottom-dot').css('left', '1.5%');
    $('.page-one-right-top-bar').css('right', '0');
    $('.page-one-right-bottom-bar').css('right', '0');
    $('.page-one-scroll').css('right', '7%');
    $('.page-one-scroll-word').css('right', '7%');
    $('.page-one-menu-icon').css('right', '2%');


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
      $('.page-two-right-bottom-scroll-bar').css('right', '8%');
      $('.page-two-right-bottom-scroll-bar').css('opacity', '1');
      $('.page-two-right-bottom-scroll-bar-box').css('right', '8%');
      $('.page-two-right-bottom-scroll-bar-box').css('opacity', '1');
      $('.page-two-img').css('transform', 'translateX(0px)');

      $('.page-two-right-portfoilo-line').css('width', '100px');

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
      $('.page-three-right-bottom-scroll-bar').css('right', '8%');
      $('.page-three-right-bottom-scroll-bar').css('opacity', '1');
      $('.page-three-right-bottom-scroll-bar-box').css('right', '8%');
      $('.page-three-right-bottom-scroll-bar-box').css('opacity', '1');
      $('.page-three-img').css('transform', 'translateX(0px)');

    })

    // 首圖動態
    $('.page-one-img').css('transform', 'translateX(0px)');
    
    

    // slide 4 mouseover 換圖
    $('.page-four-medical-space').mouseover(function () {
      $('.page-four-img').css('background', 'url(../img/index-4-pic-1.png)');
      $('.page-four-img').css('backgroundRepeat', 'no-repeat');
      $('.page-four-img').css('backgroundSize', 'cover');
      $('.page-four-img').css('backgroundPositionX', 'center');
      $('.page-four-img').css('backgroundPositionY', 'center');

    })

    $('.page-four-residental').mouseover(function () {
      $('.page-four-img').css('background', 'url(../img/index-4-pic-2.png)');
      $('.page-four-img').css('backgroundRepeat', 'no-repeat');
      $('.page-four-img').css('backgroundSize', 'cover');
      $('.page-four-img').css('backgroundPositionX', 'center');
      $('.page-four-img').css('backgroundPositionY', 'center');
    })

    $('.page-four-office').mouseover(function () {
      $('.page-four-img').css('background', 'url(../img/index-4-pic-3.png)');
      $('.page-four-img').css('backgroundRepeat', 'no-repeat');
      $('.page-four-img').css('backgroundSize', 'cover');
      $('.page-four-img').css('backgroundPositionX', 'center');
      $('.page-four-img').css('backgroundPositionY', 'center');
    })

    $('.page-four-commercial').mouseover(function () {
      $('.page-four-img').css('background', 'url(../img/index-4-pic-4.png)');
      $('.page-four-img').css('backgroundRepeat', 'no-repeat');
      $('.page-four-img').css('backgroundSize', 'cover');
      $('.page-four-img').css('backgroundPositionX', 'center');
      $('.page-four-img').css('backgroundPositionY', 'center');
    })

    $('.page-four-deco').mouseover(function () {
      $('.page-four-img').css('background', 'url(../img/index-4-pic-5.png)');
      $('.page-four-img').css('backgroundRepeat', 'no-repeat');
      $('.page-four-img').css('backgroundSize', 'cover');
      $('.page-four-img').css('backgroundPositionX', 'center');
      $('.page-four-img').css('backgroundPositionY', 'center');
    })


    // menu fb ig mouseover


    $('.page-one-fb').mouseover(function () {
      $('.page-one-fb').attr('src', '../img/fb-blue.png')
    })

    $('.page-one-fb').mouseleave(function () {
      $('.page-one-fb').attr('src', '../img/fb.png')
    })


    $('.page-one-ig').mouseover(function () {
      $('.page-one-ig').attr('src', '../img/ig-blue.png')
    })

    $('.page-one-ig').mouseleave(function () {
      $('.page-one-ig').attr('src', '../img/ig.png')
    })

    // 簡繁轉換 1 hover

    $('.page-one-rectangle').mouseover(function () {
      $('.page-one-rectangle').css('background', 'none');
      $('.page-one-rectangle').text('繁');
    })

    $('.page-one-rectangle').mouseleave(function () {
      $('.page-one-rectangle').css('background', 'url(../img/rectangle.png)');
      $('.page-one-rectangle').css('backgroundRepeat', 'no-repeat');
      $('.page-one-rectangle').css('backgroundSize', 'cover');
      $('.page-one-rectangle').css('backgroundPositionX', 'center');
      $('.page-one-rectangle').css('backgroundPositionY', 'center');
      $('.page-one-rectangle').text('');
    })

    $('.page-one-triangle').mouseover(function () {
      $('.page-one-triangle').css('background', 'none');
      $('.page-one-triangle').text('簡');
    })

    $('.page-one-triangle').mouseleave(function () {
      $('.page-one-triangle').css('background', 'url(../img/triangle.png)');
      $('.page-one-triangle').css('backgroundRepeat', 'no-repeat');
      $('.page-one-triangle').css('backgroundSize', 'cover');
      $('.page-one-triangle').css('backgroundPositionX', 'center');
      $('.page-one-triangle').css('backgroundPositionY', 'center');
      $('.page-one-triangle').text('');
    })

    // mouseover slide 4

    $('.page-four-medical-space').mouseover(function () {
      $('.page-four-medical-space').css('background', '#48FFFE');
    })

    $('.page-four-medical-space').mouseleave(function () {
      $('.page-four-medical-space').css('background', 'none');
    })

    $('.page-four-residental').mouseover(function () {
      $('.page-four-residental').css('background', '#48FFFE');
    })

    $('.page-four-residental').mouseleave(function () {
      $('.page-four-residental').css('background', 'none');
    })

    $('.page-four-office').mouseover(function () {
      $('.page-four-office').css('background', '#48FFFE');
    })

    $('.page-four-office').mouseleave(function () {
      $('.page-four-office').css('background', 'none');
    })

    $('.page-four-commercial').mouseover(function () {
      $('.page-four-commercial').css('background', '#48FFFE');
    })

    $('.page-four-commercial').mouseleave(function () {
      $('.page-four-commercial').css('background', 'none');
    })

    $('.page-four-deco').mouseover(function () {
      $('.page-four-deco').css('background', '#48FFFE');
    })

    $('.page-four-deco').mouseleave(function () {
      $('.page-four-deco').css('background', 'none');
    })


// read more 變色




// 開頭hover

$('.page-one-scroll-word').mouseover(function () {
  $('.page-one-scroll').css('transform', 'rotate(-15deg)');
  $('.page-one-scroll-arrow').css('transform', 'translate(10px)');
})

$('.page-one-scroll-word').mouseleave(function () {
  $('.page-one-scroll').css('transform', 'rotate(0deg)');
  $('.page-one-scroll-arrow').css('transform', 'translate(0px)');

})

// 開頭hover 2

$('.page-two-right-bottom-scroll-bar-box').mouseover(function () {
  $('.page-two-right-bottom-scroll-bar').css('transform', 'rotate(-15deg)');
  $('.page-two-scroll-arrow').css('transform', 'translate(15px)');
})

$('.page-two-right-bottom-scroll-bar-box').mouseleave(function () {
  $('.page-two-right-bottom-scroll-bar').css('transform', 'rotate(0deg)');
  $('.page-two-scroll-arrow').css('transform', 'translate(0px)');

})

// 開頭hover 3

$('.page-three-right-bottom-scroll-bar-box').mouseover(function () {
  $('.page-three-right-bottom-scroll-bar').css('transform', 'rotate(-15deg)');
  $('.page-three-scroll-arrow').css('transform', 'translate(15px)');
})

$('.page-three-right-bottom-scroll-bar-box').mouseleave(function () {
  $('.page-three-right-bottom-scroll-bar').css('transform', 'rotate(0deg)');
  $('.page-three-scroll-arrow').css('transform', 'translate(0px)');

})



// portfolio 位置



  













  });