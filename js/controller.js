app.factory('productFactory', function(){
	//factory
});

app.controller('headerController', function($scope, $rootScope, $localStorage){
	//do something here...
})

app.controller('cartController', function($scope, $rootScope, $localStorage){
	$scope.remove = function(product){
		$rootScope.cart.splice($rootScope.cart.indexOf(product),1);
		product.quantity++;
	}
	$scope.cart = $rootScope.cart;
})

app.controller('productController', function($scope, $rootScope, $localStorage){
	$scope.products = [
		{"quantity":2,"orderID":"000","link":"images/products/1.jpg"},
		{"quantity":1,"orderID":"001","link":"images/products/2.jpg"}, 
		{"quantity":3,"orderID":"002","link":"images/products/3.jpg"},
		{"quantity":5,"orderID":"003","link":"images/products/4.jpg"},
		//{"quantity":6,"orderID":"004","link":"images/products/5.jpeg"},
		{"quantity":5,"orderID":"005","link":"images/products/6.jpeg"},
		{"quantity":3,"orderID":"006","link":"images/products/7.jpg"},
		{"quantity":6,"orderID":"007","link":"images/products/8.jpg"},
		{"quantity":3,"orderID":"008","link":"images/products/9.jpg"},
		{"quantity":1,"orderID":"009","link":"images/products/10.jpg"},
		//{"quantity":2,"orderID":"010","link":"images/products/11.jpg"},
		{"quantity":5,"orderID":"011","link":"images/products/12.jpg"},
		{"quantity":7,"orderID":"012","link":"images/products/13.jpg"},
		{"quantity":6,"orderID":"013","link":"images/products/14.jpg"},
		{"quantity":5,"orderID":"014","link":"images/products/15.jpg"},
		//{"quantity":9,"orderID":"015","link":"images/products/16.jpg"},
		//{"quantity":7,"orderID":"016","link":"images/products/17.jpg"},
		//{"quantity":6,"orderID":"017","link":"images/products/18.jpg"},
		//{"quantity":5,"orderID":"018","link":"images/products/19.jpg"},
		//{"quantity":5,"orderID":"019","link":"images/products/20.jpg"},
		{"quantity":3,"orderID":"020","link":"images/products/21.jpg"},
		{"quantity":3,"orderID":"021","link":"images/products/22.jpg"},
		//{"quantity":3,"orderID":"022","link":"images/products/23.jpg"},
		//{"quantity":3,"orderID":"023","link":"images/products/24.jpg"},
		//{"quantity":3,"orderID":"024","link":"images/products/25.jpg"},
		//{"quantity":3,"orderID":"025","link":"images/products/26.jpg"},
		//{"quantity":3,"orderID":"026","link":"images/products/27.jpg"},
		//{"quantity":7,"orderID":"027","link":"images/products/28.jpg"},
		//{"quantity":3,"orderID":"028","link":"images/products/29.jpg"},
		//{"quantity":3,"orderID":"029","link":"images/products/30.jpg"},
		//{"quantity":3,"orderID":"030","link":"images/products/31.JPG"},
		//{"quantity":0,"orderID":"031","link":"images/products/32.jpg"}
	]
	$rootScope.cart = [];
	$scope.addToCart = function(product){
		if(product.quantity){
			$rootScope.cart.push(product);
			product.quantity--;
		}
		else{
			alert(product.orderID+" is out of stock!")
		}
	}
})