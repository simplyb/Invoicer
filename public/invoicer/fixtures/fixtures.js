// map fixtures for this application

steal("jquery/dom/fixture", function(){
	$.fixture("GET invoices.json","//invoicer/fixtures/invoices.json.get");
	$.fixture("POST invoices.json","//invoicer/fixtures/invoices.json.post");
})