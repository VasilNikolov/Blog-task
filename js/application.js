/**
 * Master application
 * Includes Classes Env, App
 */

window.App = window.App || {};
window.Env = window.Env || {};

(function($, App, Env){

    /**
     * Document ready
     */
    $(function() {

        switch (currentPage) {
            case 'Contacts':
            break;
        }

        /*-------------------------------------------------------
        Google Maps Initialization
        -------------------------------------------------------*/

        function initialize() {
            var mapOptions = {
                center: new google.maps.LatLng(42.687611, 23.335194),
                zoom: 17,
                panControl: false,
                zoomControl: false,
                scaleControl: false,
                scrollwheel: false,
                mapTypeControl: false,
                disableDoubleClickZoom: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        }

        if(currentPage == 'Contacts') {
            initialize();
        }
    });

})($, App, Env);