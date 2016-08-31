app.controller('toDoController', ['$scope', function ($scope) {
    $scope.toDoList = [];
    
    $scope.addItem = function (newItem) {
        var newItem = {
            "Item": newItem
            , "Done": false
        };
        $scope.toDoList = $scope.toDoList.concat(newItem);
    };
    
    $scope.markDone = function (item) {
        item.Done = !item.Done;
    };
    
    $scope.remove = function ($index) {
        $scope.toDoList.splice($index, 1);
    };
}]);