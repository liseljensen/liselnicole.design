// Include dependancies 
var app = angular.module('miniMe', [
  'ngRoute', 'ngMap', 'ngAnimate'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", {
        templateUrl: "partials/home.html"
        , controller: "PageCtrl"
    })

    // Pages
    .when("/work", {
        templateUrl: "partials/work.html"
        , controller: "PageCtrl"
    })
    
    // When url is /work-detail, look for a var and call it proj
    .when("/work-detail/:proj", {
        templateUrl: "partials/work-detail.html"
        , controller: "WorkDetailCtrl"
    })

    .when("/experiences", {
        templateUrl: "partials/experiences.html"
        , controller: "PageCtrl"
    })
    
//    .when("/blog", {
//        templateUrl: "partials/blog.html"
//        , controller: "PageCtrl"
//    })
    
    .when("/contact", {
        templateUrl: "partials/contact.html"
        , controller: "PageCtrl"
    })

    // else 404
    .otherwise("/404", {
        templateUrl: "partials/404.html"
        , controller: "PageCtrl"
    });
}]);

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function () {

        // Check path and hide nav if it includes work detail
        var path = $location.path(),
            findWorkDetail = path.indexOf('work-detail');
        
        if (findWorkDetail !== -1) {
             $rootScope.hideHeader = true;
             $rootScope.hideFooter = true;
        }
        else {
            $rootScope.hideHeader = false;
            $rootScope.hideFooter = false;
        }

    })
});

app.controller('PageCtrl', function ($scope) {
    // Add class page-effect
    $scope.pageClass = 'page-effect';
});

app.controller('WorkDetailCtrl', function ($scope , $location, $routeParams) {
    // Pull in template based on proj var
    $scope.include = 'partials/portfolio/' + $routeParams.proj + '.html';
});

app.controller("dataImagesWork", function ($scope) {
    // Create array of project objects
    $scope.images_work = [
        {
            num: 1,
            src: "Good-Choices-Cover.jpg",
            description: 'Good Choices',
            url_details: "good-choices"
        }
        , {
            num: 2,
            src: "Careers-Cover.jpg",
            description: 'Simplot Careers',
            url_details: "careers"
        }
        , {
            num: 3,
            src: "Fert-App-Cover.jpg",
            description: 'Fertilizer Spread Rates App',
            url_details: "fert-app"
        }
        , {
            num: 4,
            src: "Fall-Harvest-Cover.jpg",
            description: 'Fall Harvest',
            url_details: "fall-harvest"
        }
        , {
            num: 5,
            src: "WWL-Cover.jpg",
            description: 'Film Festival',
            url_details: "wwl"
        }
        , {
            num: 6,
            src: "Brand-Cover.jpg",
            description: 'Simplot Brand',
            url_details: "brand"
        }
    ];

});
app.controller("workDetails", function ($scope) {
    console.log('called');
    $scope.work_details = [

        {
            name: 'brand'
        }
        
        ];

});

//'use strict';
app.directive('autoActive', ['$location', function ($location) {
    return {
        restrict: 'A'
        , scope: false
        , link: function (scope, element) {
            function setActive() {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(li).addClass('current');
                        } else {
                            angular.element(li).removeClass('current');
                        }
                    });
                }
            }

            setActive();

            scope.$on('$locationChangeSuccess', setActive);
        }
    }
}]);