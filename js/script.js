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