define(['app', 'angular', 'authentication'], function() { 'use strict';

	return ['$scope', '$rootScope', '$route', '$browser', '$location', '$window', 'authentication', function ($scope, $rootScope, $route, $browser, $location, $window, authentication) {

		$scope.documents = [
			{
				name: 			'Addressing Capacity Needs for Integrated Coastal Mangement',
				description: 	'Addressing Capacity Needs for Integrated Coastal Mangement',
				thumbnail: 		'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-Addressing-Integrated-Coastal-Management-Capacity-Needs_Training-Guide-en.png',
				url: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-Addressing-Integrated-Coastal-Management-Capacity-Needs_Training-Guide-en.pdf',
				urlFr: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-Addressing-Integrated-Coastal-Management-Capacity-Needs_Training-Guide-fr.pdf',
				type:           'document'
			}, {
				name: 			'Developing National and Local Capacity to Achieve the Aichi Biodiversity Targets and Enhance Marine and Coastal Governance',
				description: 	'Developing National and Local Capacity to Achieve the Aichi Biodiversity Targets and Enhance Marine and Coastal Governance',
				thumbnail: 		'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-Aichi-Biodiversity-Targets_Training-Guide-en.png',
				url: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-Aichi-Biodiversity-Targets_Training-Guide-en.pdf',
				type:           'document'
			}, {
				name: 			'Key Elements for Designing and Developing Training',
				description: 	'Key Elements for Designing and Developing Training',
				thumbnail: 		'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-Designing-and-Developing-Training_Training-Guide-en.png',
				url: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-Designing-and-Developing-Training_Training-Guide-en.pdf',
				type:           'document'
			}, {
				name: 			'Environmental Impact Assessment (EIA)',
				description: 	'Environmental Impact Assessment (EIA)',
				thumbnail: 		'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-EIA_Training-Guide-en.png',
				url: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-EIA_Training-Guide-en.pdf',
				urlFr: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-EIA_Training-Guide-fr.pdf',
				type:           'document'
			}, {
				name: 			'Stakeholder Involvement and Communication',
				description: 	'Stakeholder Involvement and Communication',
				thumbnail: 		'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-ICM-Stakeholder-Involvement-and-Communication_Training-Guide-en.png',
				url: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-ICM-Stakeholder-Involvement-and-Communication_Training-Guide-en.pdf',
				urlFr: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-ICM-Stakeholder-Involvement-and-Communication_Training-Guide-fr.pdf',
				type:           'document'
			}, {
				name: 			'Integrating the Aichi Biodiversity Targets into Integrated Coastal Management Development Program through ICMS',
				description: 	'Integrating the Aichi Biodiversity Targets into Integrated Coastal Management Development Program through ICMS',
				thumbnail: 		'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-Integrated-Coastal-Management-System_Training-Guide-en.png',
				url: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-Integrated-Coastal-Management-System_Training-Guide-en.pdf',
				type:           'document'
			}, {
				name: 			'Strategic Approaches to Stakeholder Involvement',
				description: 	'Strategic Approaches to Stakeholder Involvement',
				thumbnail: 		'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-Strategic-Stakeholder-Involvement_Training-Guide-en.png',
				url: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-Strategic-Stakeholder-Involvement_Training-Guide-en.pdf',
				urlFr: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-module-Strategic-Stakeholder-Involvement_Training-Guide-fr.pdf',
				type:           'document'
			}, {
				name: 			'Strategic Environmental Assessment (SEA)',
				description: 	'Strategic Environmental Assessment (SEA)',
				thumbnail: 		'https://www.cbd.int/marine/soi/soi-training-modules/SOI-SEA_Training-Guide-en.png',
				url: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-SEA_Training-Guide-en.pdf',
				urlFr: 			'https://www.cbd.int/marine/soi/soi-training-modules/SOI-SEA_Training-Guide-fr.pdf',
				type:           'document'
			}
		];
	}];
});