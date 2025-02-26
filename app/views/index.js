define(['app', 'angular', 'authentication'], function() { 'use strict';

	return ['$scope', '$rootScope', '$route', '$browser', '$location', '$window', 'authentication', function ($scope, $rootScope, $route, $browser, $location, $window, authentication) {

	
		$scope.carouselData=  {
					items :[
						{
							title: "SOI Workshop for Africa’s Atlantic & Mediterranean coasts",
							description: "",
							imageUrl: "app/images/carousel/SOI-WS-2025-01.jpg",
							targetUrl: "https://www.cbd.int/meetings/SOI-WS-2025-01"
						}, {
							title: "Ocean Day at CBD COP 16: Ocean as the Great Connector",
							description: "",
							imageUrl: "app/images/carousel/ocean-day-cop16.jpg",
							targetUrl: "https://enb.iisd.org/ocean-day"
						}, {
							title: "4th SOI Global Dialogue with Regional Seas Organizations and Regional Fishery Bodies",
							description: "",
							imageUrl: "app/images/carousel/4SOI-GD.jpg",
							targetUrl: "https://www.cbd.int/meetings/SOI-OM-2024-01"
						}, {
							title: "SOI Global Dialogue with Regional Seas Organizations and Regional Fishery Bodies video",
							description: "",
							imageUrl: "app/images/carousel/SOI-GD.png",
							targetUrl: "https://www.youtube.com/watch?v=Zw9pNO2bwU4"
						}, {						
							title: "3rd SOI Global Dialogue with Regional Seas Organizations and Regional Fishery Bodies",
							imageUrl: "app/images/carousel/soi-om-2022-01-group-photo.jpg",
							targetUrl: "https://www.cbd.int/meetings/SOI-OM-2022-01"
						}, {						
							title: "SOI: 10 years of building capacity and catalyzing partnerships to achieve global ocean goals",
							imageUrl: "app/images/carousel/boolet-soi-10years.png",
							targetUrl: "https://www.cbd.int/marine/soi/booklet-soi-10years-en.pdf"
						},{
							title: "Sustainable Ocean Initiative video",
							description: "",
							imageUrl: "app/images/carousel/soi-video.jpg",
							targetUrl: "https://www.youtube.com/watch?v=4q6RiihseQ8&ab_channel=ConventiononBiologicalDiversity"
						},{
							title: "Sustainable Oceans: Marine Biodiversity for the Future We Want",
							description: "",
							imageUrl: "app/images/carousel/soi-marine-biodiversity-video.jpg",
							targetUrl: "https://www.youtube.com/watch?v=73hSF4kC0Lg"
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
