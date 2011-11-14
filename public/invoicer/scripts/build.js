//steal/js invoicer/scripts/compress.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('invoicer/scripts/build.html',{to: 'invoicer'});
});
