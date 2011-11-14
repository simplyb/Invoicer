// load('invoicer/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("invoicer/invoicer.html","invoicer/out")
});
