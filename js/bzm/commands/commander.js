// module: (rather than a class)
//		bzm/commands
define([
	"dojo/_base/lang", // lang.hitch
	"dojo/query",
	"dojo/ready",
	"dojo/_base/declare" // declare
], function(lang, query, ready, declare){
//
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
//console.log("cmd-23");
var _Commands = {
        /**
         * List of known commands
         */
        CMDS : {
            help_devTools: null,
            help_shortcuts: null,
            help_processInfo: null,
            help_about: null,
            file_new: null,
            file_open: null,
            file_close: null,
            file_closeOther: null,
            file_closeAll: null,
            file_save: null,
            file_saveAs: null,
            file_saveAll: null,
            file_previous: null,
            file_next: null,
            edit_undo: null,
            edit_redo: null,
            edit_cut: null,
            edit_copy: null,
            edit_paste: null,
            edit_find: null,
            edit_findNext: null,
            edit_findPrev: null,
            edit_replace: null,
            edit_replaceAll: null,
            edit_toggleInvisibles: null,
            edit_toggleRecording: null,
            edit_replayMacro: null,
            edit_toggleComment: null,
            edit_indent: null,
            edit_outdent: null,
            edit_gotoLine: null,
            source_format: null,
            source_openDeclaration: null,
            source_findRef: null,
            source_findDecl: null,
            project_open: null,
            project_close: null,
            project_new: null,
            project_build: null,
            project_validate: null,
            project_run: null,
            project_debug: null,
            project_refresh: null,
            project_properties: null,
            project_quickOpen: null,
            project_classDiagram: null,
            project_configure: null,
            project_document: null,
            ide_quit: null,
            ide_theme: null,
            ide_fontSize: null,
            ide_rightMargin: null,
            ide_configure: null,
            ide_history_next: null,
            ide_history_prev: null,
            "ide_toggle_toolbar": null,
            "ide_toggle_statusbar": null,
            "ide_toggle_context": null,
            "ide_toggle_result": null,
        },
        /**
          * When a command has no function declared,
          * use this one
          */
        nop : function () {
            alert("Not yet implemented");
        },
        /**
         * Register a new command
         */
        register : function (command, fn) {
            command.command = fn;
        },
        /**
         * Call the different command implementers so they can register
         * themselves
         */
        init : function () {
console.log("cmd-106 init()");
            for (var key in this.CMDS) {
//console.log(key);
                this.CMDS[key] = {
                    name: key,
//                    label: qx.locale.Manager.tr(key),		// todo: locale/translation
                    label: key,
                    command: this.nop
                };
            }
//            Commands.EditorCommands.init(register);		// todo
//            Commands.FileCommands.init(register);		// todo
//            Commands.HelpCommands.init(register);		// todo
//            Commands.ProjectCommands.init(register);		// todo
//            Commands.IdeCommands.init(register);		// todo
        }
	};
return _Commands;
});
//# sourceURL=commander.js