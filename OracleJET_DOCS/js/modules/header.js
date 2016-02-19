/**
 * Header module
 */
define(['knockout','ojs/ojcore', 'ojs/ojknockout', 'ojs/ojnavigationlist', 'ojs/ojoffcanvas', 'ojs/ojdatacollection-common', 'ojs/ojdialog'
], function (ko, oj, $) {
    /**
     * The view model for the header module
     */

    function HeaderViewModel() {
        var self = this;

        // Data for application name
        var appName = {
            "id": "qs",
            "name": "JET Docs"
        };
        
        self.appId = appName.id;
        self.appName = appName.name;
    }
    return HeaderViewModel;
});
