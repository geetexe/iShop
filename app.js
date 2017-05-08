var app = angular.module("iShop", ["ngRoute","ngStorage"]);
app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when("/", {
		templateUrl: "home.html"
	})
	.when("/category", {
		templateUrl: "views/category.html"
	})
	.when("/product", {
		templateUrl: "views/product.html"
	})
	.when("/cart", {
		templateUrl: "views/cart.html"
	})
	/*
	.when("/checkout", {
		templateUrl: "checkout.html"
	})*/
	.otherwise({
		templateUrl: "views/404.html"
	})
	// use the HTML5 History API
    $locationProvider.html5Mode(true);
})








