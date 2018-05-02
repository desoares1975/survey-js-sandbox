'use strict';

var editorOptions = {showEmbededSurveyTab: true};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);

function save(){
  console.log(editor, editor.text)  ;
}