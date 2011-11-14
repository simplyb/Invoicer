/**
 * @tag models, invoice
 * Wraps backend decision services.  Enables 
 * [DecideIt.Models.Decision.static.findAll retrieving],
 * [DecideIt.Models.Decision.static.update updating],
 * [DecideIt.Models.Decision.static.destroy destroying], and
 * [DecideIt.Models.Decision.static.create creating] decisions.
 */
$.Model('Invoice',
/* @Static */
{
  /**
    * Retrieves invoice data
    * @param {Object} params params that might refine your results.
    * @param {Function} success a callback function that returns wrapped decision objects.
    * @param {Function} error a callback function for an error in the ajax request.
    */
  findAll: function( params, success, error ){
    $.ajax({
      url: '/invoices.json',
      type: 'get',
      dataType: 'json',
      data: params,
      success: function(invoices){
          			 success && success(invoices)
               },
      error: error
    });
  },
  /**
   * Updates an invoices data.
   * @param {String} id A unique id representing your decision.
   * @param {Object} attrs Data to update your decision with.
   * @param {Function} success a callback function that indicates a successful update.
    * @param {Function} error a callback that should be called with an object of errors.
     */
  update: function( id, attrs, success, error ){
    $.ajax({
      url: '/invoices/'+id+'.json',
      type: 'put',
      dataType: 'json',
      data: attrs,
      success: success,
      error: error
    });
  },

  
  /**
    * Destroys a invoices data.
    * @param {String} id A unique id representing your decision.
   * @param {Function} success a callback function that indicates a successful destroy.
    * @param {Function} error a callback that should be called with an object of errors.
   */
  destroy: function( id, success, error ){
    $.ajax({
      url: '/invoices/'+id+'.json',
      type: 'delete',
      dataType: 'json',
      success: success,
      error: error
    });
  },
  /**
   * Creates an invoice
   * @param {Object} attrs A decision's attributes.
   * @param {Function} success a callback function that indicates a successful create.  The data that comes back must have an ID property.
   * @param {Function} error a callback that should be called with an object of errors.
   */
  create: function( attrs, success, error ){
    $.ajax({
      url: '/invoices.json',
      type: 'post',
      dataType: 'json',
      success: success,
      error: error,
      data: attrs
    });
  }
},
/* @Prototype */
{});

/**
 * Helper methods on collections of invoices.  But lists can also use their model's 
 * methods.  Ex:
 * 
 *   var invoices = [new Invoice({id: 5}) , new Invoice({id: 6})],
 *       list = new Invoice.List(invoices);
 *       
 *   list.destroyAll() -> calls Invoice.destroyAll with [5,6].
 */
$.Model.List('Invoice.List',
{
	/**
	 * Destroys a list of invoices
	 *     
	 *     Invoice.destroy([1,2], success())
	 */
	destroy : function(ids, success, error){
			$.each(ids, function(){
				delete todos[this]
			});
		  success();
	}	
},
{

	/**
	 * Return a new Invoice.List of only sent invoices
	 */
	sent : function(){
		return this.grep(function(item){
			return item.sent === true;
		})
	}
});