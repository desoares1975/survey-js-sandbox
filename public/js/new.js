'use strict';

var editorOptions = {showEmbededSurveyTab: true};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);

function save(){
  var yourNewSurveyJSON = editor.text;
  console.log(editor, editor.text)  ;
}