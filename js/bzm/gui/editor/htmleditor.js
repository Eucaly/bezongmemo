/*
http://dojotoolkit.org/reference-guide/1.10/dijit/Editor.html
http://dojotoolkit.org/reference-guide/1.10/dijit/_editor/plugins.html#dijit-editor-plugins
http://dojotoolkit.org/reference-guide/1.10/dojox/editor/plugins.html#dojox-editor-plugins

dojox.editor.plugins.AutoUrlLink
dojox.editor.plugins.Preview
dojox.editor.plugins.InsertAnchor
dojox.editor.plugins.PasteFromWord
dojox.editor.plugins.SafePaste
dojox.editor.plugins.Blockquote
dojox.editor.plugins.FindReplace
dojox.editor.plugins.TablePlugins
dojox.editor.plugins.Breadcrumb
*/

define(["dijit/Editor",
	"dijit/_editor/plugins/AlwaysShowToolbar",
	"dojo/dom", "dojo/query", "dojo/_base/declare",
	"dojo/dom-construct", "dojo/domReady!",
	"dijit/_editor/plugins/ViewSource",
	"dojox/editor/plugins/PrettyPrint",
    "dijit/_editor/plugins/FontChoice", // 'fontName','fontSize','formatBlock'
    "dijit/_editor/plugins/TextColor",
	"dijit/_editor/plugins/LinkDialog",
	"dojox/editor/plugins/CollapsibleToolbar",	// TBD
	"dojox/editor/plugins/InsertEntity",
	"dojox/editor/plugins/ToolbarLineBreak",
	"dojox/editor/plugins/ShowBlockNodes"	// ToDo: scrollbar bug
], function(Editor, AlwaysShowToolbar, dom, query, declare, domConstruct){
	var _HTMLEditor = declare("bzm.gui.editor.htmleditor", [Editor], {
    //this.createEditor
		constructor : function(node){
	        var myEditor = new Editor({
	            height: '',
				style: "height: 100%;",
				plugins:['undo', 'redo', 'cut','copy','paste','|',	// not in Evernote
	// removeFormat
				'bold','italic','underline','strikethrough',
				'subscript','superscript','|',	// not in Evernote
				'insertUnorderedList', 'insertOrderedList',
				'indent', 'outdent','insertHorizontalRule','|',
				'insertEntity','createLink','unlink','||'
				],
	// ToDO: more font ...
	            extraPlugins: [AlwaysShowToolbar, 'collapsibletoolbar', 'viewsource', 'showblocknodes',
				{name:'prettyprint',indentBy:2,entityMap: dojox.html.entities.html.concat(dojox.html.entities.latin)},
				{name:'dijit/_editor/plugins/FontChoice', command:'fontName', generic:true}, 'foreColor','hiliteColor','|',
				'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull']
	        }, node);
	//        query('#create2').orphan();	// disable the "createEditor" button
		    myEditor.startup();
			return myEditor;
	    }
	});
	return _HTMLEditor;
});