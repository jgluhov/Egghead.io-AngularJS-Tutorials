/**
 * Created by jgluhov on 17/01/16.
 */
import * as angular from 'angular'

angular.module('app', [])
    .controller('TutorialCtrl', TutorialCtrl)
    .filter('reverse', reverseFilter);

function TutorialCtrl($scope) {
    $scope.data = { message: '' }
}

TutorialCtrl.$inject = ['$scope'];

function reverseFilter() {
    return function (text) {
        return text.split("").reverse().join("");
    }
}