"use strict";

app.controller('HtmlCtrl', function($scope) {
  $scope.mainMenuItems = [
    {path: '/', title: 'Home'},
    {path: '/lists', title: 'Templates'},
    {path: '/modals', title: 'Modals'}
  ];

  $scope.title = 'Nette & AngularJS sandbox';
});
