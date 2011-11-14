//js invoicer/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('invoicer/invoicer.html', {
		markdown : ['invoicer']
	});
});