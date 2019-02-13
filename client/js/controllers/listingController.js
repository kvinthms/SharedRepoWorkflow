angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
        //This code from bootcamp 2
        Listings.create($scope.newListing).then(function(response) {
            $scope.listings.push(response.data);
        }, function (error) {
            console.log('Unable to retrieve listings:', error);
        });
	  /*$scope.listings.push({
          "code": $scope.newListing.code,
          "name": $scope.newListing.name,
          "coordinates": {
              "latitude": $scope.newListing.latitude,
              "longitude": $scope.newListing.longitude
          },
          "address": $scope.newListing.address
      },);*/



        /**TODO
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */
    };

    $scope.deleteListing = function(id) {
        Listings.delete(id).then(function(response) {
            $scope.listings = response.data;
        }, function (error) {
            console.log('Unable to retrieve listings:', error);
        });
        /*
        var index = $scope.listings.indexOf(id);
        $scope.listings.splice(index, 1);*/
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);