'use strict';

angular.module('locatorDemo', [
  'locator'
])
  .controller('MainCtrl', ['$scope', 'location', function ($scope, location) {
  	location.get(angular.noop, angular.noop);
    $scope.isModalVisible = false;

    $scope.toggleModal = function() {
      console.log($scope.lookedUpLocation);
      $scope.isModalVisible = !$scope.isModalVisible;
    };

    $scope.$watch('pickedLocation', $scope.toggleModal);
    $scope.$watch('lookedUpLocation', $scope.toggleModal);
  }]);