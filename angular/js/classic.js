var atasiyah = angular.module("atasiyah", []);
atasiyah.directive("angularNavbar", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl : "./html/angular-navbar.html"
    };
});