steal('jquery/controller', 
'jquery/event/default',
'jquery/model/list',
'jquery/view/ejs',
'jquery/controller/view',
'jquery/dom/form_params'
).then(
  '//invoicer/models/models.js',
  '//invoicer/widgets/invoice/invoice.js',
  '//invoicer/widgets/invoices/views/index.ejs',
  
  
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
  $.Controller.extend("Invoicer.Invoices",
    {
      defaults: {
        params: {
          order: "due_date"
        },
        invoice_list : {}
      }
    },
    /* @prototype */
    {

      // sets up the widget
      init: function( el ) {
        
        //inserts the invoice widget list index html into the DOM.
        this.element.html(this.view("//invoicer/widgets/invoices/views/index.ejs"));
        this.options.invoice_list = this.element.find("#list");
        
        // fills this list of items (creates add events on the list)
        this.options.list.findAll(this.options.params);
      },
      
      // adds existing and created to the list
      	"{list} add" : function(list, ev, invoices){

      		// then adds those invoices to #list
      		this.addInvoices(invoices);

      	},

      	// Creating a invoice --------------

      	// When a invoice is created, add it to this list
      	"created" : function(invoice){
      		this.options.list.push(invoice); //triggers 'add' on the list
      	},

      	// Destroying a invoice --------------

      	// When an invoice invoice's destroy button is clicked.
      	".invoice .destroy click" : function(el){
      		el.closest('.invoice').model().destroy();
      	},

      	// when an item is removed from the list.
      	"{list} remove" : function(list, ev, items){

      		// get the elements in the list and remove them
      		items.elements(this.element).slideUp(function(){
      			$(this).remove();
      		});

      	},
      	
      	//when the create invoice form is submitted.
      	".create_invoice submit" : function(el,ev){
      	  ev.preventDefault();
          var data = this.find('.create_invoice').formParams();
      	  new Invoice(data).save(this.callback('created'));
    			ev.stopPropagation();
      	},


      	// Updating a invoice --------------


      	// when an item is updated
      	"{list} updated" : function(list, ev, item){
      		//item.elements().html("invoiceEJS", item);
      		//publish so the invoice will update itself
      		//update completed
      	},
      	
      	// when loading the invoice list iterate over the
      	// invoices and call addInvoice
      	addInvoices : function(invoices){
      	  for(var id in invoices){
          	this.addInvoice(invoices[id]);
          }
      	},
      	
      	// instantiate invoice plugin on each invoice and
      	// append them to the list.  triggers {List} add
      	addInvoice : function(invoice){
      	  var invoice = $("<li></li>").invoicer_invoice({invoice: invoice});
      	  this.options.invoice_list.append(invoice);
      	} 
  });

});