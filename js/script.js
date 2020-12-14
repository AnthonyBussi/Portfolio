$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 700; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
});


function menuHamburger()
{
	$('.header-menu').toggleClass('is-open');
}

// gestionnaire d'evenements
$(function()
    {
        $('.navbar-toggle').on("click",menuHamburger);
    }
);
