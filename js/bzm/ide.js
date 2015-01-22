// class:
//		bzm/ide
define([
	"dojo/_base/lang", // lang.hitch
	"dojo/query",
	"dojo/ready",
	"dojo/_base/declare",
	"dojo/dom-construct",
	"dijit/layout/ContentPane",
//	"dijit/byId",
//	"dijit",
	"bzm/commands/commander",
	"bzm/gui/editor/htmleditor"
], function(lang, query, ready, declare, domConstruct, ContentPane, /*idgetById,*/ Commands, HtmlEditor){

console.log("ide-9");
var _Ide = declare("bzm.ide", [/*"dojo/Evented"*/], {

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
//
        /**
         * Initialize the different modules within the IDE.
         *
         */
	init : function (rootDoc) {
            Commands.init();
//			var node = domConstruct.create("div");
			var a = dijit.byId("content");
			var a1 = new ContentPane({title: "tab 2",
		content: '<div id="programmatic2">This div will become an auto-expanding editor.</div>'});
			a.addChild(a1);
			var b = dojo.byId("programmatic2");
//			a.addChild(node);
            var myEditor = new HtmlEditor(b);
//			a.addChild(myEditor);
//	        myEditor.startup();

//            var layouter = new Cats.Gui.Layout(rootDoc);
//            layouter.layout(this);
//            this.menuBar = new Cats.Gui.MenuBar();
//            this.initFileDropArea();
//            this.handleCloseWindow();
        }
	});
return _Ide;
});
//# sourceURL=ide.js
