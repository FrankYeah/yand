$(document).ready(function(){

    // menu 開關
    $('#right_close_div').click(closeMenu)
    $('#right_menu_icon').click(openMenu)

    function openMenu(){
      $('#right_menu_click_bar').css('visibility','visible');
      $('#right_menu_click_bar').css('opacity','1');
      $('#right_menu_click_bar').css('width','54%');
      $('#right_menu_click_bar').css('transition','width 0.6s ease 0s');
    }

    function closeMenu(){
      setTimeout(function(){
        $('#right_menu_click_bar').css('visibility','hidden')
      },600)
      $('#right_menu_click_bar').css('opacity','0.9');
      $('#right_menu_click_bar').css('width','10%');
      $('#right_menu_click_bar').css('transition','width 0.6s ease 0s');
    }

    // 滾到最上面

    $('#foot_scroll').click(function () {
      var timer = null;
      var isTop = true;
          // set timeout
          timer = setInterval(function() {
              // get scroll height
              var osTop = document.documentElement.scrollTop || document.body.scrollTop ;  // deal IE、Chrome
              // lower speed 
              var isSpeed = Math.floor(-osTop / 6);
              document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
              isTop = true;
              //clear timer
              if (osTop == 0) {
                  clearInterval(timer);
              }
          },30);

    })

    // 簡繁轉換 1 hover

    $('.rectangle').mouseover(function () {
      $('.rectangle').css('background', 'none');
      $('.rectangle').text('繁');
    })

    $('.rectangle').mouseleave(function () {
      $('.rectangle').css('background', 'url(../img/rectangle.png)');
      $('.rectangle').css('backgroundRepeat', 'no-repeat');
      $('.rectangle').css('backgroundSize', 'cover');
      $('.rectangle').css('backgroundPositionX', 'center');
      $('.rectangle').css('backgroundPositionY', 'center');
      $('.rectangle').text('');
    })

    $('.triangle').mouseover(function () {
      $('.triangle').css('background', 'none');
      $('.triangle').text('簡');
    })

    $('.triangle').mouseleave(function () {
      $('.triangle').css('background', 'url(../img/triangle.png)');
      $('.triangle').css('backgroundRepeat', 'no-repeat');
      $('.triangle').css('backgroundSize', 'cover');
      $('.triangle').css('backgroundPositionX', 'center');
      $('.triangle').css('backgroundPositionY', 'center');
      $('.triangle').text('');
    })


      // portfolio 線
      
      $('.portfolio-line').css('width', '150px');


})