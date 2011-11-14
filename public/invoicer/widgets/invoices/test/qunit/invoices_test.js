steal('funcunit/qunit',
'invoicer/fixtures/fixtures.js',
'invoicer/widgets/invoices/invoices.js',

function(){

  module("invoices", { 
		setup: function(){
		  
			//instantiate the invoices widget
      invoices = $("<div></div>").invoicer_invoices({ list: new Invoice.List() });
      
      //invoices fixture
      invoices_json = [{"due_date":"2011-11-28","name":"Invoice 0001"},
                     {"due_date":"2011-11-28","name":"Invoice 0002"}]
      
		}
	});
	

test("addInvoice", function(){
  
  //get the initial list size
  var size = invoices.find("#list > li").length;
  
  //call addInvoice
  invoices.invoicer_invoices("addInvoice", invoices_json[0]);
  
  //Expecting the length of the list to have increased by 1 invoice
  equal(invoices.find("#list > li").length, size + 1, "Adds a single invoice");
});


test("addInvoices", function(){
  
  //get the initial list size
  var size = invoices.find("#list > li").length;
  
  //call addInvoice
  invoices.invoicer_invoices("addInvoices", invoices_json);
  
  //Expecting the length of the list to have increased by 1 invoice
  equal(invoices.find("#list > li").length, size + 2, "Adds two invoices");
});


//creates a test
test("Invoice#findAll", function(){
  //prevents the next test from running for 1 sec
  stop(1000);

  //requests invoices
  Invoice.findAll({}, function(invoices){

    //makes sure we have some invoices
    ok(invoices)

    //makes sure we have at least 1 recipe
    ok(invoices.length)

    //makes sure a recipe looks right
    ok(invoices[0].due_date)
    ok(invoices[0].name)

    //allows the next test to start
    start()
  });
})


});