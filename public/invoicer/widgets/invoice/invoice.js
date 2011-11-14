steal('jquery/controller', 
'jquery/event/default',
'jquery/view/helpers'
).then('//invoicer/widgets/invoice/views/list_item.ejs',
'//invoicer/widgets/invoice/views/edit.ejs',
  
  function() {
  
  
    /**
     * An Invoices widget created like
     * 
     *    $("#invoices").invoices({ list: new Invoice.List() });
     *    
     * It listens on changes to the list and items in the list with the following actions:
     * 
     *   - "{list} add"    - invoices being added to the list
     *   - "{list} remove" - invoices being removed from the list
     *   - "{list} update" - invoices being updated in the list
     *   
     */
  $.Controller.extend("Invoicer.Invoice",
    {
      defaults: {
        params: {
        }
      }
    },
    /* @prototype */
    {

      // sets up the widget
      init: function( el ) {
        
        //inserts the invoice list item content into the <li></li>.
        this.element.html(this.view("//invoicer/widgets/invoice/views/list_item.ejs", { invoice: this.options.invoice }));
        
      },
      
      ".invoice_name click" : function(el,ev){
        ev.preventDefault();
        this.element.find(".show_invoice").animate({width: 'show'});
      }

  });

});