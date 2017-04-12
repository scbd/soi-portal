define(['app', 'moment', 'lodash'], function (app, moment, _) {

    app.controller('EventsController', ['$scope','$rootScope','$http', '$filter', function ($scope, $rootScope, $http, $filter) {
        var basicQuery ={
            'q': 'schema_s:meeting AND title_t:*SOI*',
            'fl': 'title_s, startDate_dt, endDate_dt, eventCity_EN_t, eventCountry_EN_t, symbol_s',
            'wt': 'json',
            'start': 0,
            'rows': 9999,
        };

        var nextMeetingQueryParameters = _.assign({},basicQuery, {'fq': 'startDate_dt:[NOW TO *]'}, {'sort': 'startDate_dt asc'} );
        var previousMeetingQueryParameters = _.extend({}, basicQuery, {'fq': 'startDate_dt:[* TO NOW]'}, {'sort': 'startDate_dt desc'} );

         $http.get('https://api.cbd.int/api/v2013/index/select', { params: nextMeetingQueryParameters})
             .success(function (data) {
                $scope.nextMeetings = _.map(data.response.docs, function(item)
                                { var name=item.title_s;
                                  var startDay =$filter('formatDate')(item.startDate_dt, 'DD');
                                  var endDay=  $filter('formatDate')(item.endDate_dt, 'DD');
                                  var days;
                                  if(startDay==endDay)
                                    days = startDay;
                                  else
                                    days= startDay + "-" + endDay;
                                  var startMonth = $filter('formatDate')(item.startDate_dt, 'MMMM');

                                  var endMonth = $filter('formatDate')(item.endDate_dt, 'MMMM');
                                  var startDate =  $filter('formatDate')(item.startDate_dt, 'DD, MMMM');
                                  var endDate = $filter('formatDate')(item.endDate_dt, 'DD, MMMM')
                                  var month;
                                  if(startMonth==endMonth){
                                    month=startMonth;
                                    startDate =  $filter('formatDate')(item.startDate_dt, 'DD');
                                  }
                                  else{
                                    month=startMonth + '//' + endMonth;
                                  }
                                  var year=$filter('formatDate')(item.startDate_dt, 'YYYY');
                                  var  meeting={'name': item.title_s, 'days':days, 'startDate':startDate, 'endDate':endDate,'month':month,'year':year, 'city': item.eventCity_EN_t, 'country': item.eventCountry_EN_t, 'url': 'https://www.cbd.int/doc/?meeting=' + item.symbol_s};

                                  return meeting;
                                });
            }).error(function(error){$scope.nextMeetings=[]});

        $http.get('https://api.cbd.int/api/v2013/index/select', { params: previousMeetingQueryParameters})
             .success(function (data) {
                $scope.previousMeetings = _.map(data.response.docs, function(item)
                                { var name=item.title_s;
                                  var startDay =$filter('formatDate')(item.startDate_dt, 'DD');
                                  var endDay=  $filter('formatDate')(item.endDate_dt, 'DD');
                                  var days;
                                  if(startDay==endDay)
                                    days = startDay;
                                  else
                                    days= startDay + "-" + endDay;
                                  var startMonth = $filter('formatDate')(item.startDate_dt, 'MMMM');

                                  var endMonth = $filter('formatDate')(item.endDate_dt, 'MMMM');
                                  var startDate =  $filter('formatDate')(item.startDate_dt, 'DD, MMMM');
                                  var endDate = $filter('formatDate')(item.endDate_dt, 'DD, MMMM')
                                  var month;
                                  if(startMonth==endMonth){
                                    month=startMonth;
                                    startDate =  $filter('formatDate')(item.startDate_dt, 'DD');
                                  }
                                  else{
                                    month=startMonth + '//' + endMonth;
                                  }
                                  var year=$filter('formatDate')(item.startDate_dt, 'YYYY');
                                  var  meeting={'name': item.title_s, 'days':days, 'startDate':startDate, 'endDate':endDate,'month':month,'year':year, 'city': item.eventCity_EN_t, 'country': item.eventCountry_EN_t, 'url': 'https://www.cbd.int/doc/?meeting=' + item.symbol_s};

                                  return meeting;
                                });
            }).error(function(error){$scope.previousMeetings=[]});
        }])
        .filter('formatDate', function(){
            return function(date,formart){
                if(formart== undefined)
                    formart = 'DD MMM YYYY';
                return moment.utc(date).format(formart);
            }
        });

});

		//$scope.nextMeetings = [
//			{
//				name: 'Sustainable Ocean Initiative (SOI) Capacity-building Workshop for East Africa',
//				days: '18-22 ', month: 'January', year: '2016',
//				city: 'Nosy Be', country: 'Madagascar',
//				url: 'https://www.cbd.int/doc/?meeting=SOIWS-2015-04'
//			}
//		];

		//$scope.previousMeetings = [
//			{
//				name: 'Sustainable Ocean Initiative (SOI) National Capacity Development Workshop for Namibia',
//				days: '13-16', month: 'October', year: '2015',
//				city: 'Swakopmund', country: 'Namibia',
//				url: 'https://www.cbd.int/doc/?meeting=SOIWS-2015-03'
//			}, {
//				name: 'Sustainable Ocean Initiative (SOI) National Capacity Development Workshop for Samoa',
//				days: '28-30', month: ' September', year: '2015',
//				city: 'Apia', country: 'Samoa',
//				url: 'https://www.cbd.int/doc/?meeting=SOIWS-2015-05'
//			}, {
//				name: 'Sustainable Ocean Initiative (SOI) Training of Trainers Workshop',
//				days: '11-15', month: ' September', year: '2015',
//				city: 'Yeosu', country: 'Republic of Korea',
//				url: 'https://www.cbd.int/doc/?meeting=SOIWS-2015-02'
//			}, {
//				name: 'Sustainable Ocean Initiative (SOI) Capacity-building Workshop for South America',
//				days: '23-27', month: 'February', year: '2015',
//				city: 'Lima', country: 'Peru',
//				url: 'https://www.cbd.int/doc/?meeting=MCBWS-2015-01'
//			}, {
//				name: 'Sustainable Ocean Initiative (SOI) High-Level Meeting',
//				days: '16', month: 'October', year: '2014',
//				city: 'Pyeongchang', country: 'Republic of Korea',
//				url: 'https://www.cbd.int/doc/?meeting=SOIOM-2014-02'
//			}, {
//				name: 'Sustainable Ocean Initiative (SOI) Global Partnership Meeting',
//				days: '3 - 4', month: 'October', year: '2014',
//				city: 'Seoul', country: 'Republic of Korea',
//				url: 'https://www.cbd.int/doc/?meeting=SOIOM-2014-01'
//			}, {
//				name: 'Sustainable Ocean Initiative (SOI) Capacity-building Workshop for East, South and South-East Asia',
//				days: '9 - 13', month: 'December', year: '2013',
//				city: 'Guangzhou', country: 'China',
//				url: 'https://www.cbd.int/doc/?meeting=CBWSOI-SEASI-01'
//			}, {
//				name: 'Sustainable Ocean Initiative (SOI) Capacity-Building Workshop for West Africa',
//				days: '4 - 8', month: 'February', year: '2013',
//				city: 'Dakar', country: 'Senegal',
//				url: 'https://www.cbd.int/doc/?meeting=CBWSOI-WAFR-01'
//			}
//		];
//    }];
//});
