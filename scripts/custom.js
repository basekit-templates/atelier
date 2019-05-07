

// ---------------------------------
// Toggles
// ---------------------------------


// Navigation animation toggle
$(document).on("click", ".navigation-icon--container input", function() {
    $( "body" ).toggleClass( "navigation-open" );
});


// Ecom basket toggle
$(document).on("click", ".template-header--contact", function() {
    $( "body" ).toggleClass( "form-open" );
});


// If slide navigation / pagination is visible add class to change feature positioning
$(document).ready(function(){
    if ( $(".template-feature nav").hasClass("responsiveslideshow__slide-navigation") || $(".template-feature nav").hasClass("responsiveslideshow__slide-pagination") ) {
        $(".template-feature").addClass("has-slide-navigation");
    }
});


// If slide navigation and pagination are visible hide the pagination
$(document).ready(function(){
    if ( $(".template-feature nav").hasClass("responsiveslideshow__slide-pagination") && $(".template-feature nav").hasClass("responsiveslideshow__slide-navigation") ) {
        $(".template-feature").addClass("hide-slide-pagination");
    }
});


// If slideshow is present add height
$(document).ready(function() {
    if ( $("body.touch .template-feature .responsiveslideshow").length > 0) {
        $(".template-feature").css("height", "92%");
    } else {
        $(".template-feature").css("height", "auto");
    }
});


// ---------------------------------
// Disable photoswipe for contact icon
// ---------------------------------


$(document).ready(function () {
    bk$('.template-header--contact .js-pswp-image-trigger').each(
        function () {
            bk$(this).removeClass('js-pswp-image-trigger').css('cursor', 'default').on('click',
            function (evt) {
                evt.preventDefault();
                }
            );
        }
    );
});




// ---------------------------------
// Published Mode Detection
// ---------------------------------


var publishedmode = true;


if($("body.edit-mode").length > 0) {
    publishedmode = false;
}




// ---------------------------------
// Close Everything
// ---------------------------------


function closeEverything() {
    $( ".widget__extendednavigation" ).removeClass( "open" );
    $( "body" ).removeClass( "form-open" );
    $( "body, html" ).removeClass( "navigation--open" );
    $( "body, html" ).removeClass( "basket--open" );
    $( "#page-zones__template-widgets__ecombasket-shopbasket" ).removeClass( "show-content" );
    $( ".navigation-item.folder" ).removeClass( "open" );
}




// ---------------------------------
// Basket Overlay
// ---------------------------------


/*if(publishedmode==true) {

    $(document).on("click", ".ecombasket__basket-toggle", function() {
        $( "body, html" ).toggleClass( "basket-open" );
    });




    $(document).on("click touchstart", ".basket-body", function(event) {
        if( $(event.target).is(".basket-body") ) {
            closeEverything();
        }
    });



    $('.ecombasket__basket-body').click(function(e) {
        if (e.target == this) {
            closeEverything();
        }
    });
}*/




// On ESC key

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeEverything();
    }
};
