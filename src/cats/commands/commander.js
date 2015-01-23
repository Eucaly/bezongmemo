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
define(["require", "exports"], function (require, exports) {
    var Commands;
    (function (Commands) {
        /**
         * List of known commands
         */
        Commands.CMDS = {
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
        };
        /**
          * When a command has no function declared,
          * use this one
          */
        function nop() {
            alert("Not yet implemented");
        }
        /**
         * Register a new command
         */
        function register(command, fn) {
            command.command = fn;
        }
        /**
         * Call the different command implementers so they can register
         * themselves
         */
        function init() {
            for (var key in Commands.CMDS) {
                Commands.CMDS[key] = {
                    name: key,
                    //                label : qx.locale.Manager.tr(key),	// todo
                    label: key,
                    command: nop
                };
                console.log(key);
            }
            //		EditorCommands.init(register);	// todo
            //		FileCommands.init(register);	// todo
            //		HelpCommands.init(register);	// todo
            //		ProjectCommands.init(register);	// todo
            //		IdeCommands.init(register);		// todo
        }
        Commands.init = init;
    })(Commands || (Commands = {}));
    return Commands;
});
