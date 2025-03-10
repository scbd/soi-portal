define(['app', 'angular', 'authentication'], function() { 'use strict';

	return ['$scope', '$rootScope', '$route', '$browser', '$location', '$window', 'authentication', function ($scope, $rootScope, $route, $browser, $location, $window, authentication) {

		$scope.documents = [
			{
				name: 			'SOI Post-2020 Action Plan (2020-2025)',
				description: 	'SOI Post-2020 Action Plan (2020-2025)',
				thumbnail: 		'app/images/resources/170-post-2020-soi-actionplan.png',
				url: 			'https://www.cbd.int/marine/soi/Post-2020-SOI-ActionPlan-en.pdf',
				type:           'document'
			}, 
			{
				name: 			'Report of the 4th SOI Global Dialogue',
				description: 	'Report of the 4th SOI Global Dialogue',
				thumbnail: 		'app/images/resources/170-soi-gd-rso-rfb-04.png',
				url: 			'https://www.cbd.int/doc/c/cb6a/08b8/41d13ec1348143b5b4e5f187/soi-om-2024-01-report-en.pdf',
				type:           'document'
			}, 
			{
				name: 			'Busan outcome',
				description: 	'Busan outcome',
				thumbnail: 		'app/images/resources/170-busan-outcome-2022.png',
				url: 			'https://www.cbd.int/doc/c/423d/f5cd/e40e990d94018939ec8a9df6/soi-om-2022-outcomes-en.pdf',
				type:           'document'
			}, 
			{
				name: 			'SOI: 10 years of building capacity and catalyzing partnerships to achieve global ocean goals ',
				description: 	'SOI: 10 years of building capacity and catalyzing partnerships to achieve global ocean goals ',
				thumbnail: 		'app/images/resources/170-soi-10years.png',
				url: 			'https://www.cbd.int/marine/soi/booklet-soi-10years-en.pdf',
				type:           'document'
			}, 
			{
				name: 			'Seoul Outcome +2',
				description: 	'Seoul Outcome +2 ',
				thumbnail: 		'app/images/resources/170-seoul-outcome-2.png',
				url: 			'https://www.cbd.int/doc/c/a3e1/53e3/08fc2a8f36e21b2366d03aa9/soi-om-2018-01-02-en.pdf',
				type:           'document'
			}, 
			{
				name: 			'Seoul Outcome',
				description: 	'Seoul Outcome',
				thumbnail: 		'app/images/resources/170-seoul-outcome.png',
				url: 			'https://www.cbd.int/marine/soi/soi-seoul-outcome-brochure-en.pdf',
				type:           'document'
			}, 
			{
				name: 			'SOI Action Plan 2015-2020',
				description: 	'SOI Action Plan 2015-2020',
				thumbnail: 		'app/images/resources/170-actionplan-en.jpg',
				url: 			'https://www.cbd.int/doc/meetings/mar/soiom-2014-02/official/soiom-2014-02-actionplan-en.pdf',
				type:           'document'
			}, {
				name: 			'Expert Interview Series on Aichi Biodiversity Target 11',
				description: 	'Expert Interview Series on Aichi Biodiversity Target 11',
				thumbnail: 		'app/images/resources/170-target11-interviews.jpg',
				url: 			'resources/target11-interviews',
				type:           'web-link'
			}, {
				name: 			'CBD Coral Reef Portal',
				description: 	'CBD Coral Reef Portal',
				thumbnail: 		'app/images/resources/170-coral-reefs.png',
				url: 			'https://www.cbd.int/coral-reefs/',
				type:           'web-link'
			}, {
				name: 			'Interviews at the UN Ocean Conference, June 2017',
				description: 	'Interviews at the UN Ocean Conference, June 2017',
				thumbnail: 		'app/images/resources/170-soi-interview.jpg',
				url: 			'resources/unoc-interviews',
				type:           'web-link'
			}, {
				name: 			'Concluding Statement from the SOI High-Level Meeting, October 2014',
				description: 	'Concluding Statement from the SOI High-Level Meeting, October 2014',
				thumbnail: 		'app/images/resources/170-soi-high-level-concluding-statement.jpg',
				url: 			'https://www.cbd.int/marine/soi/soi-high-level-concluding-statement-en.pdf',
				type:           'document'
			}, {
				name: 			'CBD Technical Series Reports',
				description: 	'CBD Technical Series Reports',
				thumbnail: 		'app/images/resources/170-technical-series_brochure.jpg',
				url: 			'https://www.cbd.int/ts/',
				type:           'web-link'
			}, {
				name: 			'Reports of the CBD Regional EBSA Workshops',
				description: 	'Reports of the CBD Regional EBSA Workshops',
				thumbnail: 		'app/images/resources/170-workshop-reports_brochure.jpg',
				url: 			'https://www.cbd.int/ebsa/resources?tab=workshop-reports',
				type:           'document-list'
			}, {
				name: 			'Report of the Expert Workshop',
				description: 	'Report of the Expert Workshop on Scientific and Technical Guidance on the use of Biogeographic Classification Systems and Identification of Marine Areas beyond national jurisdiction in need of protection',
				thumbnail: 		'app/images/resources/170-pdf.jpg',
				url: 			'https://www.cbd.int/doc/meetings/mar/ewbcsima-01/official/ewbcsima-01-02-en.pdf',
				type:           'document'
			}, {
				name: 			'Report of the Expert Workshop',
				description: 	'Report of the Expert Workshop on Ecological Criteria and Biogeographic Classification Systems for Marine Areas in Need of Protection',
				thumbnail: 		'app/images/resources/170-pdf.jpg',
				url: 			'https://www.cbd.int/doc/meetings/mar/ewsebm-01/official/ewsebm-01-02-en.pdf',
				type:           'document'
			}, {
				name: 			'Background materials for CBD Marine Spatial Planning Workshop, September 2014',
				description: 	'Background materials for CBD Marine Spatial Planning Workshop, September 2014',
				thumbnail: 		'app/images/resources/170-pdf.jpg',
				url: 			'resources/background-materials',
				type:           'web-link'
			}
		];
	}];
});