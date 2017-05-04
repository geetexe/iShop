var app = angular.module("iShop", ["ngRoute", "conf"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "home.html"
	})
	.when("/category", {
		templateUrl: "category.html"
	})
	.when("/product", {
		templateUrl: "product.html"
	})
	.when("/cart", {
		templateUrl: "cart.html"
	})
	.when("/checkout", {
		templateUrl: "checkout.html"
	})
	.otherwise({
		templateUrl: "404.html"
	})
})