app.directive('header', function(){
	return{
		restrict: 'A',
		replace: true,
		templateUrl: "js/common/header.html"
	}
})
app.directive('footer', function(){
	return{
		restrict: 'A',
		replace: true,
		templateUrl: "js/common/footer.html"
	}
})