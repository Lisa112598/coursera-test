(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";


  $scope.lunchCheck = function () {
    $scope.message = calculateDishes($scope.dishes);

  };

  function calculateDishes(string){
    var ans = "";
    var words ="";
    words = string.split(',');

    if(words.length<=3){
      ans = "Enjoy!";
    }
    else if(words.length>3){
      ans = "Too much!";
    }
    else{
      ans = "Please enter data first";
    }

    return ans;
  }

}

})();
