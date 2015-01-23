/* // <reference path="../typings/dojo/dojo.d.ts" /> */
//import E = require("dojo/Evented");
import E = require("dojo/dom");
import Commands = require("cats/commands/commander");

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

//module Cats {
//    var GUI = require('nw.gui');

    /**
     * This class represents the total IDE. The CATS is started a single isntance will be
     * created that takes care of rendering all the components and open a project if applicable.
     * 
     */ 
/*    export*/ class Ide /*extends E*/ {	// todo

        // List of different themes that are available
        private themes = {                  
// todo            cats : cats.theme.Default,
// todo            gray: cats.theme.Grey,
// todo            classic: qx.theme.Classic,
// todo            indigo: qx.theme.Indigo,
// todo            modern:qx.theme.Modern,
// todo            simple:qx.theme.Simple
        };

        recentProjects:Array<string>;

        debug:boolean= false;

        catsHomeDir: string;
        private static STORE_KEY = "cats.config";
        private lastEntry = <any>{}; 

        constructor() {
// todo            super();
            this.catsHomeDir = process.cwd();
// todo            this.loadMessages();
// todo            this.config = this.loadPreferences();
// todo            this.recentProjects = Array.isArray(this.config.projects) ?  this.config.projects : [];
            
// todo            this.icons = this.loadIconsMap();
// todo            this.configure();
            
            window.onpopstate = (data) => {
// todo                if (data && data.state) this.goto(data.state);
            }
            
// todo            this.loadShortCuts();
            
        }
        /**
         * Load the icons map from the file.
         */ 


        /**
         * Load all the locale dependend messages from the message file.
         * 
         * @param locale The locale you want to retrieve the messages for 
         */ 
        /**
         * Initialize the different modules within the IDE.
         * 
         */ 
        init(/*rootDoc:qx.ui.container.Composite*/) {
            /*Cats.*/Commands.init();
// todo            var layouter = new Gui.Layout(rootDoc);
// todo            layouter.layout(this);
// todo            this.menuBar = new Gui.MenuBar();
// todo            this.initFileDropArea();
// todo            this.handleCloseWindow();
        }

        /**
         * Add an entry to the history list
         */ 


        /**
         * Configure the IDE based on the settings
         */ 
        /**
         * Attach the drag n' drop event listeners to the document
         *
         * @author  LordZardeck <sean@blackfireweb.com>
         */


        /**
         * Process the file and open it inside a new ACE session
         *
         * @param   event       {DragEvent}
         * @author  LordZardeck <sean@blackfireweb.com>
         */


        /**
         * Load the projects and files that were open last time before the
         * IDE was closed.
         */ 


        /**
         * Load the configuration for the IDE. If there is no configuration
         * found, create the default one to use.
         */ 

        /**
         * Update the configuration for IDE
         * 
         */ 

        /**
         * Persist the current IDE configuration to a file
         */ 


        /**
         * Add a new project to the IDE
         * 
         * @param projectDir the directory of the new project
         */
        
        
        /**
         * Quit the application. If there are unsaved changes ask the user if they really
         * want to quit.
         */ 
    }

//}

export = Ide;
//# sourceURL=ide.js
