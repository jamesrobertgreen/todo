app.controller('toDoController', ['$scope', function ($scope) {
    $scope.init = function () {
        var tmpToDolist = localStorage.getItem("toDoList");
        if (tmpToDolist === '' || tmpToDolist === undefined || tmpToDolist === null) {
            $scope.toDoList = [];
        }
        else { 
            $scope.toDoList = JSON.parse(tmpToDolist);
        }
    };
    $scope.addItem = function (newItem) {
        var newItem = {
            "Item": newItem
            , "Done": false
        };
        $scope.toDoList = $scope.toDoList.concat(newItem);
        updateStorage();
    };
    $scope.markDone = function (item) {
        item.Done = !item.Done;
        updateStorage();
    };
    $scope.remove = function ($index) {
        $scope.toDoList.splice($index, 1);
        updateStorage();
    };
    
    var updateStorage = function(){
      localStorage.setItem("toDoList", JSON.stringify($scope.toDoList));  
    };
    
}]);