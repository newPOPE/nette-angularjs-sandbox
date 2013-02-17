"use strict";

app.controller('ModalsCtrl', function ($scope) {
  $scope.openAlert = false;

  $scope.runAlert = function () {
    $scope.openAlert = true;
  };

  $scope.onAlertClose = function () {
    alert('You close an Alert window.');
  }
});
