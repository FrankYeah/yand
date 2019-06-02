$(document).ready(function(){

    // // menu 開關
    // $('#right_close_div').click(closeMenu)
    // $('#right_menu_icon').click(openMenu)

    // function openMenu(){
    //   $('#right_menu_click_bar').css('visibility','visible');
    //   $('#right_menu_click_bar').css('opacity','1');
    //   $('#right_menu_click_bar').css('width','54%');
    //   $('#right_menu_click_bar').css('transition','width 0.6s ease 0s');
    // }

    // function closeMenu(){
    //   setTimeout(function(){
    //     $('#right_menu_click_bar').css('visibility','hidden')
    //   },600)
    //   $('#right_menu_click_bar').css('opacity','0.9');
    //   $('#right_menu_click_bar').css('width','10%');
    //   $('#right_menu_click_bar').css('transition','width 0.6s ease 0s');
    // }

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


})