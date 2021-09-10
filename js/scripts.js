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



    document.querySelector('.js-aboutme').addEventListener('click', (e) => {
        e.preventDefault();
        const aboutme =  $('#about');
        aboutme.css('transition-duration', '0ms');
        aboutme.css('transform', 'translateY(0)');
        document.getElementById('about').scrollIntoView();
        aboutme.css('transition-duration', '1.4s');
    });

    document.querySelector('.js-projects').addEventListener('click', (e) => {
        e.preventDefault();
        const projects =  $('#projects');
        projects.css('transition-duration', '0ms');
        projects.css('transform', 'translateY(0)');
        document.getElementById('projects').scrollIntoView();
        projects.css('transition-duration', '1.4s');
    });
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

$('.project-modal').on('hide.bs.modal', (e) => {
    $('.project-modal__body').scrollTop(0);
});