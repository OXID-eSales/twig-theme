/**
 * Copyright © OXID eSales AG. All rights reserved.
 * See LICENSE file for license details.
 */
$( window ).load( function()
{
    var $window = $( this ),
        $oManufacturerSlider = $( '#manufacturerSlider .flexslider' ),
        flexslider;

    function getGridSize()
    {
        return ( $oManufacturerSlider.width() < 600 ) ? 3 :
               ( $oManufacturerSlider.width() < 900 ) ? 5 : 7;
    }


    $( '#promo-carousel' ).flexslider(
        {
            animation: "slide"
        }
    );

    flexslider = $oManufacturerSlider.flexslider(
        {
            animation: "slide",
            itemWidth: 100,
            itemMargin: 10,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize() // use function to pull in initial value
        }
    );

    // check grid size on resize event
    $window.resize( function()
        {
            var gridSize = getGridSize();

            flexslider.data().flexslider.vars.minItems = gridSize;
            flexslider.data().flexslider.vars.maxItems = gridSize;
        }
    );
} );
