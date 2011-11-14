steal("funcunit", function(){
	module("invoicer test", { 
		setup: function(){
			S.open("/invoicer/invoicer.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})