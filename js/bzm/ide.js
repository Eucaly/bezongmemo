// class:
//		bzm/ide
define([
	"dojo/_base/lang", // lang.hitch
	"dojo/query",
	"dojo/ready",
	"dojo/_base/declare",
	"bzm/commands/commander"
], function(lang, query, ready, declare, Commands){

console.log("ide-9");
var _Ide = declare("bzm.ide", [], {

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
