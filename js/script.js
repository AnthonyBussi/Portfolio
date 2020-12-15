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
        $('.navbar-toggle').on("click",menuHamburger);
        $('.js-scrollTo').on('click', scrollToLink);
    }
);
