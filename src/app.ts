/**
 * Created by jgluhov on 17/01/16.
 */
import * as angular from 'angular'

angular.module('app', [])
    .controller('TutorialCtrl', TutorialCtrl)
    .filter('reverse', reverseFilter)
    .directive('enter', enter)
    .directive('leave', leave);

function TutorialCtrl($scope) {
    $scope.data = { message: '' };
    $scope.loadMoreTweets = function() {
        alert('Loading more tweets');
    }
}

TutorialCtrl.$inject = ['$scope'];

function reverseFilter() {
    return function (text) {
        return text.split("").reverse().join("");
    }
}

function enter() {
    return function (scope, element, attrs) {
        element.bind('mouseenter', function() {
            element.addClass('panel');
            scope.$apply(attrs.enter)
        })
    }
}

function leave() {
    return function (scope, element) {
        element.bind('mouseleave', function() {
            element.removeClass('panel');
        })
    }
}