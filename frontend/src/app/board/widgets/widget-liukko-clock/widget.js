// This file contains all necessary for widget-protacon-video
(function() {
  'use strict';

  // Controller for generic error handling.
  angular.module('frontend.board')
    .directive('widgetLiukkoClock', [
      function directive() {
        return {
          restrict: 'A',
          scope: {},
          replace: true,
          templateUrl: '/frontend/board/widgets/widget-liukko-clock/widget.html',
          controller: [
            '$scope',
            function controller($scope) {
            }
          ]
        };
      }
    ])
  ;
}());
