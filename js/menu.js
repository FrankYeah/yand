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