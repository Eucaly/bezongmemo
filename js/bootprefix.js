// http://dojotoolkit.org/documentation/tutorials/1.10/node/
if (0) {	// todo, move to somewhere else
	var gui = require("nw.gui");
	var mainWindow = gui.Window.get();
	if (1) mainWindow.showDevTools();		// unmark list line, to bring up dev tool at startup
	if (0) alert();						// unmark list line, to pause startup to allow dev tool to be ready
}
// Configuration Object for Dojo Loader:
dojoConfig = {
	baseUrl: process.cwd(),		// TBD
    async: 1, // We want to make sure we are using the "modern" loader
	async:1, debug:1, noGlobals:0,
    hasCache: {
        "host-nwjs": 1, // Ensure we "force" the loader into Node.js mode
        "dom": 1, // Ensure that none of the code assumes we have a DOM
		"dojo-config-api" : 1
    },
    // While it is possible to use config-tlmSiblingOfDojo to tell the
    // loader that your packages share the same root path as the loader,
    // this really isn't always a good idea and it is better to be
    // explicit about our package map.
    packages: [{
        name: "dojo",
        location: "./dojo/dojo"
    },{
/*        name: "_base",
        location: "./dojo/dojo/_base"
    },{ */
        name: "dijit",
        location: "./dojo/dijit"
    },{
        name: "dojox",
        location: "./dojo/dojox"
    },{
        name: "js",
        location: "./js"
    },{
        name: "bzm",
        location: "./js/bzm"
    }],
	deps: ["js/bzm/main"]
};
