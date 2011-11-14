steal(
'jquery/controller',
'jquery/model/list',
'jquery/event/default',
'jquery/controller',
'jquery/controller/subscribe',
'jquery/view/ejs',
'jquery/controller/view',
'jquery/dom/form_params').then(
'./models/models.js',
'./widgets/invoices/invoices.js',
'./fixtures/fixtures.js',
'./vendor/jquery-ui/css/start/jquery-ui-1.8.16.custom.css',
'./vendor/jquery-ui/js/jquery-ui-1.8.16.custom.min.js',

	function(){					// configure your application
	  
	  /* attaches both the rails session token and juggernaut session id with every ajax request
     which allows us to both interact with rails and prevent duplicate messages*/
    $(document).ajaxSend(function(e, xhr, options) {
      // bypass ejs view requests
      if (options.dataType == 'json') {
        var token = $("meta[name='csrf-token']").attr("content");
        xhr.setRequestHeader("X-CSRF-Token", token);
      }
    });
	  
	  //initializing our invoice widget
		$("#invoices").invoicer_invoices({ list: new Invoice.List() });
		$(".datepicker").datepicker({dateFormat: 'yy-mm-dd'});
		
	});