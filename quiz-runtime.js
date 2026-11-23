const questions=window.NETPROX_QUESTIONS;
const testTitle=window.NETPROX_TEST_TITLE;
const basePath=document.body.dataset.base||'./';
const welcome=document.querySelector('#welcome'),quiz=document.querySelector('#quiz'),result=document.querySelector('#result');
const area=document.querySelector('#question-area'),timer=document.querySelector('#timer'),timeText=document.querySelector('#time-text');
const countText=document.querySelector('#question-count'),answeredText=document.querySelector('#answered-count'),progressBar=document.querySelector('#progress-bar');
const usernameInput=document.querySelector('#student-username'),startBtn=document.querySelector('#start-btn');
const prevBtn=document.querySelector('#prev-btn'),nextBtn=document.querySelector('#next-btn'),submitBtn=document.querySelector('#submit-btn');
let current=0,answers=Array(questions.length).fill(null),secondsLeft=45*60,intervalId,finished=false,studentUsername='';

function arrangeQuestions(){
  const buckets={easy:[],intermediate:[],hard:[]};
  questions.forEach(question=>buckets[question.level].push(question));
  const pattern=['easy','intermediate','easy','hard','intermediate'];
  const ordered=Array.from({length:questions.length},(_,index)=>buckets[pattern[index%pattern.length]].shift());
  questions.splice(0,questions.length,...ordered);
}
function shuffleQuestionOptions(){
  questions.forEach(question=>{
    const choices=question.options.map((text,index)=>({text,correct:index===question.answer}));
    for(let i=choices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[choices[i],choices[j]]=[choices[j],choices[i]]}
    question.options=choices.map(choice=>choice.text);question.answer=choices.findIndex(choice=>choice.correct);
  });
}
function renderQuestion(){
  const item=questions[current];countText.textContent=`Question ${current+1} of ${questions.length}`;
  answeredText.textContent=`${answers.filter(answer=>answer!==null).length} answered`;progressBar.style.width=`${((current+1)/questions.length)*100}%`;
  area.innerHTML=`<div class="question-tag">${item.topic}</div><h2 class="question">${item.question}</h2><div class="options" role="group" aria-label="Answer choices">${item.options.map((option,index)=>`<button class="option ${answers[current]===index?'selected':''}" type="button" aria-pressed="${answers[current]===index}" data-index="${index}"><span class="option-letter">${String.fromCharCode(65+index)}</span><span>${option}</span></button>`).join('')}</div>`;
  area.querySelectorAll('.option').forEach(button=>button.addEventListener('click',()=>{answers[current]=Number(button.dataset.index);renderQuestion()}));
  prevBtn.disabled=current===0;nextBtn.hidden=current===questions.length-1;submitBtn.hidden=current!==questions.length-1;
}
function updateTimer(){const minutes=Math.floor(secondsLeft/60),seconds=secondsLeft%60;timeText.textContent=`${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;if(secondsLeft<=300)timer.classList.add('warning');if(secondsLeft<=0){clearInterval(intervalId);finishTest(true);return}secondsLeft--}
function finishTest(timeExpired=false){
  if(finished)return;finished=true;clearInterval(intervalId);
  const correct=answers.reduce((sum,answer,index)=>sum+(answer===questions[index].answer?1:0),0),score=Math.round(correct/questions.length*100),unanswered=answers.filter(answer=>answer===null).length;
  const message=score>=80?'Great work! You have a strong start with everyday computer skills.':score>=50?'Good effort. Review the topics you found tricky and keep practising.':'Thanks for completing the test. A little practice with these basics will help build confidence.';
  welcome.hidden=true;quiz.hidden=true;result.hidden=false;
  result.innerHTML=`<div class="result-mark" aria-hidden="true">${score>=50?'✓':'↗'}</div><div class="eyebrow" style="justify-content:center">TEST COMPLETE</div><h2>Your result</h2><p class="result-lede">${testTitle}</p><p class="result-student">Username: <strong></strong></p><div class="score-box"><strong>${score}</strong><span>/ 100</span></div><div class="result-stats"><div><strong>${correct} / ${questions.length}</strong>Correct answers</div><div><strong>${questions.length-correct} / ${questions.length}</strong>Incorrect</div><div><strong>${unanswered}</strong>Unanswered</div></div><p class="result-message">${timeExpired?'Time is up. ':''}${message}</p><p class="result-save-status">Result shown for this student.</p><button id="restart-btn" class="primary-btn" type="button">Back to tests <span aria-hidden="true">→</span></button>`;
  result.querySelector('.result-student strong').textContent=studentUsername;
  document.querySelector('#restart-btn').addEventListener('click',()=>location.assign(`${basePath}index.html`));
}
startBtn.addEventListener('click',()=>{
  studentUsername=usernameInput.value.trim();
  if(!studentUsername){usernameInput.setCustomValidity('Enter your username before starting the test.');usernameInput.reportValidity();return}
  usernameInput.setCustomValidity('');
  arrangeQuestions();shuffleQuestionOptions();welcome.hidden=true;quiz.hidden=false;renderQuestion();updateTimer();intervalId=setInterval(updateTimer,1000);
});
usernameInput.addEventListener('input',()=>usernameInput.setCustomValidity(''));
prevBtn.addEventListener('click',()=>{if(current>0){current--;renderQuestion()}});
nextBtn.addEventListener('click',()=>{if(current<questions.length-1){current++;renderQuestion()}});
submitBtn.addEventListener('click',()=>finishTest());
