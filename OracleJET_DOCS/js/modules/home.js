/**
 * Main content module
 */

 
        
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout',
    'ojs/ojinputtext', 'ojs/ojbutton'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function mainContentViewModel() {
        var self = this;

//self.something = ko.observable("This paragraph uses content from its own 'home' ViewModel. The module is found in the /js/module folder");

        self._HELP_SOURCE = "http://www.oracle.com";
        self._HELP_DEF = "Enter your username and password";
        self.isRequired = ko.observable(true);
        self.isHelpSource = ko.observable(true);
        self.isHelpDef = ko.observable(true);
        self.helpSource = ko.observable(self._HELP_SOURCE);
        self.helpDef = ko.observable(self._HELP_DEF);
        setHelpSource = function () {
            if (self.isHelpSource())
                self.helpSource(self._HELP_SOURCE);
            else
                self.helpSource(null);
            return true;
        };
        setHelpDef = function () {
            if (self.isHelpDef())
                self.helpDef(self._HELP_DEF);
            else
                self.helpDef(null);
            return true;
        };

        self.clickedButton = ko.observable("(None clicked yet)");
        self.buttonClick = function (data, event) {
            console.log("Made it!");
            self.clickedButton(event.currentTarget.id);
//            window.location.href('docs');
            self.router.go(data.value);
            return true;
        };
        
       
    }

    return mainContentViewModel;
});
