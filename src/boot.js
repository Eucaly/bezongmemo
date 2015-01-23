// module:
//		boot : boot main module after Dojo Toolkit loaded
console.log("boot.js #2");
require([
	"cats/main",
    "dojo/parser",
    "dojo/dom",
    "dojo/_base/lang",
    "dijit/layout/BorderContainer",
    "dijit/layout/TabContainer",
    "dijit/layout/AccordionContainer",
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
    "dojo/domReady!"
], function (cats, parser, dom, lang, BorderContainer, TabContainer, AccordionContainer,
        config, query, registry, MenuItem, Menu, array, MenuSeparator,
        FilteringSelect, on, popup, djwindow, aspect, GUI) {
console.log("boot.js #34");
            var parsed = parser.parse();	// todo
	        cats.main();
        });
        
//# sourceURL=boot.js