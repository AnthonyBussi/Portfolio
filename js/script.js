function horizontalScroll(){
    var hauteur = $(document).height()-$(window).height();
    var position = $(document).scrollTop();
    var largeur = $(window).width();	
    var barre = position / hauteur * largeur;	
    $("#scroll-line").css("width", barre);
}

function scrollToLink(){
    var page = $(this).attr('href');
    var speed = 700;
    $('html, body').animate({scrollTop : $(page).offset().top}, speed);
    return false;
}

function menuHamburger()
{
	$('.header-menu').toggleClass('is-open');
}

// Gestionnaire d'évènements
$(function()
    {
	$(document).on('scroll', horizontalScroll);
        $('.navbar-toggle').on("click",menuHamburger);
        $('.js-scrollTo').on('click', scrollToLink);
    }
);
