$(document).ready(function () {
    $('.btn-celular').on('click', function () {
        $('.navcelular').toggleClass('ativo');
        $('.btn-celular').find('i').toggleClass('fa-x');
        
    });
    
});


const sections = $('section');
const navItens = $('.nav_item');

$(window).on('scroll', function(){
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - 
    header.outerHeight();

    let activeSectionIndex = 0;
    
    if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
    } else {
        header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0.1');

    }
});