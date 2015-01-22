// module:
//		bzm/main : main method after Dojo Toolkit loaded
// var Cats;
console.log("main.js #2");
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
	"dojo/node!nw.gui",
	"js/bzm",
	"bzm/ide",
    "dojo/domReady!"
], function (parser, dom, lang, BorderContainer, TabContainer, /*ContentPane,*/ AccordionContainer,
        /*ModuleTreeModel, ModuleTree,*/ config, query, registry, MenuItem, Menu, array, MenuSeparator,
        FilteringSelect, on, popup, djwindow, aspect, GUI, bzm, Ide) {
console.log("main.js #30");

if (0) {	// todo, move to somewhere else
	var mainWindow = GUI.Window.get();
	if (1) mainWindow.showDevTools();		// unmark list line, to bring up dev tool at startup
	if (1) alert();						// unmark list line, to pause startup to allow dev tool to be ready
}
// fork from https://github.com/jbaron/cats under below license
//
// Copyright (c) JBaron.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
        var args = GUI.App.argv;
        if (args.indexOf("--debug") === -1) {
            console.info = function () {
            };
            console.debug = function () {
            };
        }
console.log("#44 location: ", document.location);
		IDE = new Ide();
//        Cats.IDE = new Cats.Ide();
/*        if (args.indexOf("--debug") > -1) {
            Cats.IDE.debug = true;
        }
*/
console.log("main.js #54");
    var parsed = parser.parse();	// todo
		var a=dijit.byId("content");
console.log("#70 "+a);
		IDE.init(document);
//        Cats.IDE.init(app.getRoot());
/*        var prjDir = determineProject(args);
        if (prjDir) {
            Cats.IDE.addProject(prjDir);
        }
        else {
            if (args.indexOf("--restore") > -1)
                Cats.IDE.restorePreviousProjects();
        }
*/
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
//# sourceURL=main.js
