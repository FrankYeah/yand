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





    $('.center-img-pic').mouseover(function(e){
        e.target.style.opacity = 0;
    })

    $('.center-img-pic').mouseleave(function(e){
        e.target.style.opacity = 1;
    })

})