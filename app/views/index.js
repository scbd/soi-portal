define(['app', 'angular', 'authentication'], function() { 'use strict';

	return ['$scope', '$rootScope', '$route', '$browser', '$location', '$window', 'authentication', function ($scope, $rootScope, $route, $browser, $location, $window, authentication) {

	
		$scope.carouselData=  {
					items :[
						{
							title: "SOI Global Dialogue Intersessional Workshop",
							imageUrl: "app/images/carousel/soi-global-dialogue.png",
							targetUrl: "https://www.cbd.int/meetings/SOI-WS-2021-01 "
						},{
							title: "Sustainable Ocean Day: Ocean Voices at CBD COP 14",
							imageUrl: "app/images/carousel/sod-cop14.jpg",
							targetUrl: "http://enb.iisd.org/biodiv/cop14/sustainable-ocean-day/ "
						},{
							title: "Sustainable Ocean Initiative video",
							description: "",
							imageUrl: "app/images/carousel/soi-video.jpg",
							targetUrl: "https://www.youtube.com/watch?v=4q6RiihseQ8"
						}, {
							title: "Sustainable Oceans: Marine Biodiversity for the Future We Want",
							description: "",
							imageUrl: "app/images/carousel/soi-marine-biodiversity-video.jpg",
							targetUrl: "https://www.youtube.com/watch?v=73hSF4kC0Lg"
						}, {
							title: "PANORAMA portal hosted by Blue Solutions",
							description: "",
							imageUrl: "app/images/carousel/blue-solutions.jpg",
							targetUrl: "http://panorama.solutions/en/portal/marine-coastal"
						}, {
							title: "SOI Global Dialogue with Regional Seas Organizations and Regional Fisheries Bodies",
							description: "",
							imageUrl: "app/images/carousel/soiom-2016-01-group-photo.jpg",
							targetUrl: "https://www.cbd.int/meetings/SOI-OM-2018-01"
						}

					]
				};
		$(document).ready(function(){
				$('.carousel').carousel({
					interval: 5000
				});
			});
        $rootScope.homePage = true;
        $rootScope.navigation = [];
        $rootScope.navigationTree = [];
    }];
});
