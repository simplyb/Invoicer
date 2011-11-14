steal('funcunit',
'invoicer/fixtures/fixtures.js',
'invoicer/widgets/invoices/invoices.js',

function(){

  module("invoices", {
    setup: function() {
      S.open("//invoicer/widgets/invoices/invoices.html");
    }
  });

  test("invoice list is shown", function(){

     S("#list").exists(function(){
       ok(true, "an invoices widget exists");
     })
   });
   
   test("invoice form adds to dom", function(){
     
     //fill out the invoice form
     S("input[name='invoice[name]']").exists().click().type("Invoice 0006");
     S("input[name='invoice[customer_name]']").exists().click().type("My Customer");
     S("input[name='invoice[due_date]']").exists().click().type("2011-11-15");
     
     //click the create button
     S("button.success").exists().click(function(){
       // wait for AJAX response
        S('#list > li').visible(function(){
          equal( S('#list > li').size(), 5, "there are 5 invoices")
        })

        S('#list > li:last a').exists().click();
     });
    
     
   });
      
});