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
		templateUrl: "partials/home.html",
		controller: "PageCtrl"
	})

	// Pages
	.when("/work", {
		templateUrl: "partials/work.html",
		controller: "PageCtrl"
	})

	.when("/experiences", {
			templateUrl: "partials/experiences.html",
			controller: "PageCtrl"
		})
		.when("/blog", {
			templateUrl: "partials/blog.html",
			controller: "PageCtrl"
		})
		.when("/contact", {
			templateUrl: "partials/contact.html",
			controller: "PageCtrl"
		})

	// else 404
	.otherwise("/404", {
		templateUrl: "partials/404.html",
		controller: "PageCtrl"
	});
}]);


app.controller('PageCtrl', function ($scope /*, $location, $http */ ) {
	console.log("Page Controller reporting for duty.");
	$scope.pageClass = 'page-effect';

});

app.controller("dataImagesWork", function ($scope) {
	$scope.images_work = [

		{
			num: 2,
			category: 'branding',
			src: "Good-Choices-Cover.jpg",
			description: 'Good Choices',
			url_details: "portfolio/good-choices.html"
        }
        , {
			num: 3,
			category: 'photo',
			src: "Careers-Cover.jpg",
			description: 'Simplot Careers',
			url_details: "portfolio/careers.html"
        }
        , {
			num: 6,
			category: 'design',
			src: "Fert-App-Cover.jpg",
			description: 'Fertilizer Spread Rates App',
			url_details: "portfolio/fert-app.html"
        },
		{
			num: 4,
			category: 'design',
			src: "Fall-Harvest-Cover.jpg",
			description: 'Fall Harvest',
			url_details: "portfolio/fall-harvest.html"
        },
		{
			num: 4,
			category: 'design',
			src: "WWL-Cover.jpg",
			description: 'Film Festival',
			url_details: "portfolio/wwl.html"
        },
		{
			num: 1,
			category: 'marketing',
			src: "MHL-Cover.jpg",
			description: 'My Holiday Lawn',
			url_details: "portfolio/mhl.html"
         },
		{
			num: 1,
			category: 'marketing',
			src: "Brand-Ed-Cover.jpg",
			description: 'Brand Education',
			url_details: "portfolio/brand-ed.html"
         },
		{
			num: 5,
			category: 'marketing',
			src: "Brand-Cover.jpg",
			description: 'Simplot Brand',
			url_details: "portfolio/brand.html"
        },
		{
			num: 5,
			category: 'marketing',
			src: "Simplot-com-Cover.jpg",
			description: 'Corporate Site Rebranding',
			url_details: "portfolio/simplot-com.html"
        }
        , ];

});


//'use strict';
app.directive('autoActive', ['$location', function ($location) {
	return {
		restrict: 'A',
		scope: false,
		link: function (scope, element) {
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