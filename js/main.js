require([
    "dojo/parser",
    "dojo/dom",
    "dojo/_base/lang",
    "dijit/layout/BorderContainer",
    "dijit/layout/TabContainer",
//    "api/ModuleContentPane",
    "dijit/layout/AccordionContainer",
//    "api/ModuleTreeModel",
//    "api/ModuleTree",
    "dojo/_base/config",
    "dojo/query",
    "dijit/registry",
    "dijit/MenuItem",
    "dijit/Menu",
    "dojo/_base/array", // array.forEach
    "dijit/MenuSeparator",
    "dijit/form/FilteringSelect",
    "dojo/on",
    "dijit/popup",
    "dojo/window", // djwindow
    "dojo/aspect", // aspect
	"js/cats",
	"dojo/node!nw.gui",
    "dojo/domReady!"
], function (parser, dom, lang, BorderContainer, TabContainer, /*ContentPane,*/ AccordionContainer,
        /*ModuleTreeModel, ModuleTree,*/ config, query, registry, MenuItem, Menu, array, MenuSeparator, FilteringSelect, on, popup, djwindow, aspect, Cats, GUI) {
console.log("main.js #30");

if (0) {	// todo, move to somewhere else
	var mainWindow = GUI.Window.get();
	if (1) mainWindow.showDevTools();		// unmark list line, to bring up dev tool at startup
	if (1) alert();						// unmark list line, to pause startup to allow dev tool to be ready
}
        var args = GUI.App.argv;
        if (args.indexOf("--debug") === -1) {
            console.info = function () {
            };
            console.debug = function () {
            };
        }
console.log("#44 location: ", document.location);
/*		
        Cats.IDE = new Cats.Ide();
        if (args.indexOf("--debug") > -1) {
            Cats.IDE.debug = true;
        }
        Cats.IDE.init(app.getRoot());
        var prjDir = determineProject(args);
        if (prjDir) {
            Cats.IDE.addProject(prjDir);
        }
        else {
            if (args.indexOf("--restore") > -1)
                Cats.IDE.restorePreviousProjects();
        }
*/		
    // Initial setup code
console.log("main.js #54");
//	global.Cats = Cats;
    var parsed = parser.parse();	// todo
});
if (0)
{
    // Catch unhandled expections so they don't stop the process.
    process.on("uncaughtException", function (err) {
        console.error("Uncaught exception occured: " + err);
        console.error(err.stack);
        if (Cats.IDE.console)
            Cats.IDE.console.error(err.stack);
    });
}

