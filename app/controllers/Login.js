!function () {

	function LoginController($rootScope, $interval, Router) {
		$interval.cancel($rootScope.stopper);
		$rootScope.stopper = $interval(function () {
			if ($rootScope.carousel.getActiveCarouselItemIndex() == 2) {
				$rootScope.carousel.first();
			}else {
				$rootScope.carousel.next();
			}
		}, 3000);

		this.go = function () {
			Router.push('categories');
		}
	}

	LoginController.$inject = ['$rootScope', '$interval', 'Router']
	angular.module(NG_MODULE).controller('LoginController', LoginController);
	
}();