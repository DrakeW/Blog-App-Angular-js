'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.blogs=[{title:"death", content:"i'm a zomble", author:"DK"}, 
    			{title:"live", content:"I'm alive", author:"JW"}, 
    			{title:"zombie", content:"I'm a human", author:"SAY"}];
    $scope.readMore = function(blog, blogs) {
    	console.log(blogs);
    	$location.path('/blog/' + indexOf(blog, blogs));
    };
  });


var indexOf = function(obj, ary) {
	var index = 0
	for (var i=0; i < ary.length; i++) {
		if (ary[i] == obj) {
			index = i;
			break;
		}
	}
	return index;
} 