angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('DatepickerDemoCtrl', function ($scope) {
  $scope.container = {
    one: null,
    two: null
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
});
angular.module('ui.bootstrap.demo').directive('myDatepicker', function() {
  return {
      restrict: 'A',
      scope: {
          model: "=",
          format: "@",
          options: "=datepickerOptions",
          myid: "@"
      },
      templateUrl: 'datePickerTemplate.html',
      link: function(scope, element) {
          scope.popupOpen = false;
          scope.openPopup = function($event) {
              $event.preventDefault();
              $event.stopPropagation();
              scope.popupOpen = true;
          };

          scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            scope.opened = true;
          };

      }
  };
});
