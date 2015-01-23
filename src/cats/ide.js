define(["require", "exports", "cats/commands/commander"], function (require, exports, Commands) {
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
    /*    export*/ var Ide = (function () {
        function Ide() {
            // List of different themes that are available
            this.themes = {};
            this.debug = false;
            this.lastEntry = {};
            // todo            super();
            this.catsHomeDir = process.cwd();
            // todo            this.loadMessages();
            // todo            this.config = this.loadPreferences();
            // todo            this.recentProjects = Array.isArray(this.config.projects) ?  this.config.projects : [];
            // todo            this.icons = this.loadIconsMap();
            // todo            this.configure();
            window.onpopstate = function (data) {
                // todo                if (data && data.state) this.goto(data.state);
            };
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
        Ide.prototype.init = function () {
            /*Cats.*/ Commands.init();
            // todo            var layouter = new Gui.Layout(rootDoc);
            // todo            layouter.layout(this);
            // todo            this.menuBar = new Gui.MenuBar();
            // todo            this.initFileDropArea();
            // todo            this.handleCloseWindow();
        };
        Ide.STORE_KEY = "cats.config";
        return Ide;
    })();
    return Ide;
});
