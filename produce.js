#!/usr/bin/env phantomjs

var args = require('system').args;
if (args.length!=2) {
    console.log("Please call with webpage to render");
    phantom.exit();
}

var src = args[1];
console.log("src is " + src);

var page = require('webpage').create();
page.onConsoleMessage = function(msg){
    console.log(msg);
};
page.open(src, function() {
    var config = page.evaluate(function() { return document.config; });
    console.log("config is " + JSON.stringify(config));
    page.viewportSize = { width: config.width, height: config.height };
    page.open(src, function() {
	for (var i=config.first; i<=config.last; i++) {
	    page.evaluate(function(i) { document.step(i); },i);
	    var zf = ('00000000000'+i).slice(-6);
	    page.render("html2video_" + zf + ".png");
	}
	phantom.exit();
    });
});


