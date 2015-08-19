var app = angular.module("App", ['ngRoute','ngAnimate']);


app
.config(['$routeProvider',
	function($routeProvider) {
	    $routeProvider.
	     when('/home', {
	        templateUrl: 'views/home.html',
	        controller: 'HomeController'
	      }).
	      when('/settings', {
	        templateUrl: 'views/settings.html',
	        controller: 'SettingsController'
	      }).
	      when('/view2', {
	        templateUrl: 'views/view2.html',
	        controller: 'View2Controller'
	      }).
	     when('/buttonsView', {
			templateUrl: 'views/buttonsView.html',
			controller: 'ButtonsViewController'
		 }).
	      otherwise({
	        redirectTo: '/home'
	      });
	  }
	])


.directive('navbar', function() {
return {
    restrict: 'EA',
    scope: {
    	sideBarOpenned: '=open'
	},
    templateUrl: 'shared/navbar/navbar.html',

    link: function (scope, element, attrs) {

    		//scope.sideBarOpenned = false;
			scope.selectedOpt = 1;



            // now do stuff with the number, you can access it through the scope
            scope.navUrl = function ( url ){
            	//$location.path(path);
            }
            
            //Side Bar Behavior
            scope.sideBarOpen = function ( Opt ){
            	if(scope.sideBarOpenned){
            		if(scope.selectedOpt != Opt){
            			scope.selectedOpt = Opt;
            			scope.sideBarOpenned = true;
						}
            		else
            			scope.sideBarOpenned = false;
            	}else{
            		scope.selectedOpt = Opt;
            		scope.sideBarOpenned = true;
            	}


            }

        }
  };



});