angular.module('reviewApp')
	.controller('reviewAppController', ['$scope', 'moment', function ($scope, moment) {
		$scope.reviewFull = [];

		$scope.options = [
			{
				title: "CREATED_ASC",
				direction: "-time"
			},
			{
				title: "CREATED_DSC",
				direction: "time"
			}
		];
		//$scope.pagination = Pagination.getNew(2);

		$scope.submitReview = function () {
			$scope.date = moment().format('YYYY/MM/DD hh:mm:ss');
			$scope.reviewFull.push({
				nickname: $scope.nickname,
				text: $scope.reviewText,
				time: $scope.date
			});
			//localStorage.setItem("reviews", $scope.reviewFull);
		};

		//$scope.pagination.numPages = Math.ceil($scope.reviewFull.length / $scope.pagination.perPage);
	}])

.directive("directiveTitle", function () {
	return {
		template: "<h2>ReviewR 2.0</h2>",
		restrict: "E"
	};
});
