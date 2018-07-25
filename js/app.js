define(["jquery", "text!template/form.html"], function($, formHtml) {
    "use strict";

    // private variables here...
    var settings, $form;

    var app = {
        init: function(config) {
            // get the settings and make them available through the app
            settings = config;
            $(formHtml).insertAfter("element where to inject the form");
            // get a reference of the form after is inserted
            $form = $("#FORM-ID");
            // call initialization methods
            initializeEvents();
        }
    };

    // example initialization
    function initializeEvents() {
        // here I have used the $form pointer to initialize the events on the form
    }

    return app;
});
