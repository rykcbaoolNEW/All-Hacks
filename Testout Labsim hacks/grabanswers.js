document.querySelectorAll('.ReportViewer-detailedAnswer').forEach((e)=>{e.click()})
var length = document.querySelectorAll('.ReportViewer-detailedAnswer').length;
let answers = {};

for(let i=0;i<length;i++){
answers[i] = [];
var element = document.querySelector(`[data-automationid="ReportViewer.Question.details${i}"]`);
element.children[0].children[2].querySelectorAll('.ExamEngine_designerAnswerCorrect').forEach((e)=>{

answers[i].push(e.children[2].innerText);
console.log(e.children[2].innerText);

});
}

console.log(answers);
