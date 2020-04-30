import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

import {skill} from './skill.js'
// import './bootstrap.min.js';

$(document).ready(function () {
    skill();

    let $blocks = $('.js-content-block');
    $blocks.css('transform', 'translateY(' + $(window).height() / 6 + 'px)');
    scrollContent($blocks);
    navbar();
    document.addEventListener('scroll', function (event) {
        scrollContent($blocks);
        navbar();
    }, true /*Capture event*/);
});

function navbar() {
    const $navbar = $('.js-navbar');

    if($(window).scrollTop() === 0){
        $navbar.removeClass('bg-primary');
    }else{
        $navbar.addClass('bg-primary');
    }
}

function scrollContent($blocks) {
    let screenBottom = $(window).scrollTop() + $(window).height(),
        offset = 0;

    if($(window).width() >= 768){
        let $profileImg = $('.js-profile-img--aligned');
        let $profileContainerHeight = $('.js-profile-container').outerHeight(),
            imgBottom = $profileImg.offset().top + $profileImg.height();

        if (screenBottom > imgBottom){
            offset = $profileContainerHeight - ($profileContainerHeight * (imgBottom/screenBottom));
            $profileImg.find('.js-profile-img--parallax').css('transform', 'translateY('+ offset +'px)');
        }
    }

    $blocks.each( (index) => {
        if(screenBottom > $($blocks[index]).offset().top){
            let fadingSpace = $(window).height() / 6;

            if(screenBottom - $($blocks[index]).offset().top < fadingSpace){
                $($blocks[index]).css('transform', 'translateY('+ fadingSpace +'px)');
                $($blocks[index]).css('opacity', '0');
            }else{
                $($blocks[index]).css('opacity', '1');
                $($blocks[index]).css('transform', 'translateY(0)');

                $($blocks[index]).trigger('triggerVisible')
            }
        }
    } );
}