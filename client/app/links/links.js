angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function(links) {
        //we do stuff
        $scope.data.links = links;
      })
      .catch(function(err) {
        //do something if err
        console.error(err);
      });
  };

  $scope.signout = function() {
    Auth.signout();
  };

  $scope.getLinks();

});
