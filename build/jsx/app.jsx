'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';

var surveyJSON = { title: "Por favor diga-nos, quais tecnologias você usa?", pages: [
  { name:"page1", questions: [
      { type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "frameworkUsing",title: "Do you use any front-end framework like Bootstrap?" },
      { type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{frameworkUsing} = 'Yes'" }
   ]},
  { name: "page2", questions: [
    { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
    { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } ] },
  { name: "page3",questions: [
    { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } ] }
 ]
};

function sendDataToServer(survey) {
  var resultAsString = JSON.stringify(survey.data);
  alert(resultAsString); //send Ajax request to your web server.
}

ReactDOM.render(
  <Survey.Survey json={surveyJSON} onComplete={sendDataToServer}/>,
  document.getElementById("surveyContainer"));
