var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
    console.log("hello world from controller");
    
    var refresh = function(){
        $http.get('/contactlist').then(function(response){
            console.log("I got the data i requested");        
            $scope.contactlist = response.data;
        });    
    };
    
    refresh();
    
    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist',$scope.contact).then(function(response){
            console.log(response);
            $scope.contact = "";
            refresh();
        });   
    };
    
    $scope.remove = function(id){
        console.log(id);
        $http.delete('/contactlist/' + id).then(function(response){
            refresh();
        });
    };
    
    $scope.edit = function(id){
      console.log("Came here" + id);
        $http.get('/contactlist/' + id).then(function(response){
            $scope.contact = response.data;
        });
    };
    
    $scope.update = function(id){
      console.log($scope.contact._id);
        $http.put('/contactlist/'+ $scope.contact._id,$scope.contact).then(function(response){
            refresh();
        });
    };
    
    $scope.deselect = function(){
        console.log("Clear got called");
        $scope.contact = "";
    }
        
    
    
    
}]);


