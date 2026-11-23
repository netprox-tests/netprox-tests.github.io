const questions = [
  {tag:'Computer basics',q:'What is the main job of an operating system, such as Windows?',o:['To manage the computer’s hardware and software','To create electricity for the computer','To protect the computer from every possible problem','To connect only to websites'],a:0},
  {tag:'Files and folders',q:'What is a folder on a computer?',o:['A container for files and other folders','A program that performs a specific task','A type of internet connection','A part inside the computer'],a:0},
  {tag:'Computer basics',q:'Which item is computer hardware?',o:['A keyboard','A web browser','A spreadsheet','An operating system'],a:0},
  {tag:'Computer basics',q:'Which is an example of software?',o:['A mouse','A monitor','A word-processing application','A USB cable'],a:2},
  {tag:'Files and folders',q:'What does a file name extension usually tell you?',o:['The type or format of the file','Who last opened the file','How old the computer is','The folder where the file is stored'],a:0},
  {tag:'File extensions',q:'Which extension is commonly used for a Microsoft Word document?',o:['.mp3','.docx','.xlsx','.jpg'],a:1},
  {tag:'File extensions',q:'You need to send someone a document that should look the same on most devices. Which format is a good choice?',o:['.exe','.pdf','.mp3','.zip'],a:1},
  {tag:'File extensions',q:'Which extension is commonly used for a spreadsheet workbook?',o:['.xlsx','.pptx','.png','.txt'],a:0},
  {tag:'File extensions',q:'Which extension is commonly used for a PowerPoint presentation?',o:['.docx','.pptx','.html','.wav'],a:1},
  {tag:'File extensions',q:'Which of these is a common image file extension?',o:['.jpg','.exe','.xlsx','.docx'],a:0},
  {tag:'File extensions',q:'Which extension is commonly used for a video file?',o:['.mp4','.txt','.pptx','.csv'],a:0},
  {tag:'File extensions',q:'Which extension is commonly used for an audio file?',o:['.mp3','.pdf','.png','.xlsx'],a:0},
  {tag:'File extensions',q:'You want to save a simple note that can be opened in almost any text editor. Which extension fits best?',o:['.txt','.mp4','.pptx','.exe'],a:0},
  {tag:'File extensions',q:'What kind of file is usually a .zip file?',o:['A compressed collection of files','A picture','A music track','A web browser'],a:0},
  {tag:'File extensions',q:'You see a file named setup.exe. What is it most likely to be?',o:['A program or installer that can run','A picture from a camera','A plain text note','A spreadsheet'],a:0},
  {tag:'File extensions',q:'Which extension is commonly used for a web page?',o:['.html','.mp3','.xlsx','.jpg'],a:0},
  {tag:'Computer shortcuts',q:'Which keyboard shortcut usually saves your current work?',o:['Ctrl + S','Ctrl + P','Ctrl + Z','Ctrl + F'],a:0},
  {tag:'Computer shortcuts',q:'You made a mistake while editing a document. Which shortcut usually undoes the last action?',o:['Ctrl + Y','Ctrl + Z','Ctrl + A','Ctrl + N'],a:1},
  {tag:'Computer shortcuts',q:'Which shortcut usually copies selected text or a file?',o:['Ctrl + C','Ctrl + X','Ctrl + V','Ctrl + P'],a:0},
  {tag:'Computer shortcuts',q:'After copying text, which shortcut usually pastes it?',o:['Ctrl + V','Ctrl + Z','Ctrl + S','Ctrl + F'],a:0},
  {tag:'Computer shortcuts',q:'Which shortcut usually cuts selected text or a file so you can move it?',o:['Ctrl + X','Ctrl + C','Ctrl + P','Ctrl + A'],a:0},
  {tag:'Computer shortcuts',q:'Which shortcut usually selects all text or items in the current area?',o:['Ctrl + A','Ctrl + S','Ctrl + F','Ctrl + Z'],a:0},
  {tag:'Computer shortcuts',q:'You want to find a word in a long document. Which shortcut should you try?',o:['Ctrl + F','Ctrl + P','Ctrl + N','Ctrl + X'],a:0},
  {tag:'Computer shortcuts',q:'Which shortcut usually prints the current document or page?',o:['Ctrl + P','Ctrl + V','Ctrl + A','Ctrl + Y'],a:0},
  {tag:'Computer shortcuts',q:'Which shortcut often opens a new document or window in an application?',o:['Ctrl + N','Ctrl + Z','Ctrl + C','Ctrl + F'],a:0},
  {tag:'Computer shortcuts',q:'You used Undo, then decide you wanted that change after all. Which shortcut often redoes it?',o:['Ctrl + Y','Ctrl + X','Ctrl + P','Ctrl + A'],a:0},
  {tag:'Internet basics',q:'What does downloading mean?',o:['Copying a file from the internet to your device','Sending a file from your device to the internet','Deleting a file permanently','Changing a file name'],a:0},
  {tag:'Internet basics',q:'What does uploading mean?',o:['Sending a file from your device to an online location','Copying a file from the internet to your device','Turning off Wi-Fi','Opening a file from a folder'],a:0},
  {tag:'Internet basics',q:'What is a web browser used for?',o:['Opening and viewing websites','Typing only numbers','Charging a laptop','Scanning paper documents'],a:0},
  {tag:'Online safety',q:'What is the main purpose of a Wi-Fi password?',o:['To help prevent people without permission from joining the network','To make every website load instantly','To increase the computer’s storage','To turn Wi-Fi into mobile data'],a:0},
  {tag:'Online safety',q:'You receive an unexpected email asking you to click a link and enter your password. What is the safest first step?',o:['Do not click; check with the supposed sender using a trusted contact method','Reply with your password so they can confirm your account','Forward it to everyone in your contacts','Download every attachment'],a:0},
  {tag:'Online safety',q:'You receive an unexpected attachment named invoice.pdf.exe. What is the safest response?',o:['Do not open it; verify the message with the sender through a trusted channel','Open it because the name includes .pdf','Rename it to invoice.pdf and open it','Forward it to coworkers to ask if it is safe'],a:0},
  {tag:'Word problem',q:'A computer shows a pop-up asking you to call an unfamiliar number to remove a virus. What is the safest response?',o:['Close the pop-up if possible and contact your IT support person through a known channel','Call the number and give the caller remote access','Pay immediately with a gift card','Enter your work password into the pop-up'],a:0},
  {tag:'Word problem',q:'You have edited a spreadsheet and need to keep both the original and your updated version. What should you do?',o:['Use Save As to create a separately named copy before continuing','Change the original file extension to .pdf','Delete the original, then save','Use Ctrl + X and close the spreadsheet'],a:0},
  {tag:'Word problem',q:'You need to move a file from Folder A to Folder B, while removing it from Folder A. Which sequence usually does this?',o:['Select it, press Ctrl + X, open Folder B, then press Ctrl + V','Select it, press Ctrl + C, then close Folder A','Press Ctrl + P, then open Folder B','Rename the file with a .zip extension'],a:0},
  {tag:'Word problem',q:'A report is saved as report.docx. You need to send a read-only copy while keeping the editable original. What is the best approach?',o:['Export a PDF copy and keep the .docx file','Rename the only copy to report.pdf','Delete the .docx file and create a screenshot','Change the file extension without converting it'],a:0},
  {tag:'Word problem',q:'You downloaded a file from a website and now need to place it in your team’s online shared folder. Which action describes the second step?',o:['Upload the file from your device to the shared folder','Download it again from the shared folder','Rename it so it uploads automatically','Use Ctrl + Z to send it online'],a:0},
  {tag:'Word problem',q:'You have four photos to email together, and your mail system accepts ZIP attachments. What should you do?',o:['Put copies of the photos into a ZIP archive and attach it','Rename each photo with a .zip extension','Convert each photo to a Word document','Delete the photos after selecting them'],a:0},
  {tag:'Word problem',q:'You are editing a document and accidentally undo two changes. You wanted to undo only the most recent change. What can you try?',o:['Use Redo once to restore the earlier of the two undone changes','Press Undo again to restore both changes','Use Ctrl + P to restore the text','Close the document without saving'],a:0},
  {tag:'Word problem',q:'A file named budget.xlsx opens in a text editor. You need to work with its spreadsheet contents. What should you do first?',o:['Open it with a spreadsheet application such as Excel','Rename it to budget.mp3','Change its extension to .pptx','Upload it to a video website'],a:0},
  {tag:'Word problem',q:'Your manager asks for a PDF of a spreadsheet, but you may need to edit the data later. Which choice best meets both needs?',o:['Keep the .xlsx workbook and export a separate PDF copy','Rename the workbook from .xlsx to .pdf','Print the workbook and delete the digital file','Save only a screenshot of the spreadsheet'],a:0},
  {tag:'Computer basics',q:'Which device is mainly used to move the pointer and select items on screen?',o:['Mouse','Printer','Speaker','Microphone'],a:0},
  {tag:'Files and folders',q:'Where do deleted files often go first on a Windows computer?',o:['Recycle Bin','Downloads folder','Taskbar','Web browser'],a:0},
  {tag:'Computer basics',q:'Which device displays text, pictures, and windows from your computer?',o:['Monitor','Keyboard','Router','USB flash drive'],a:0},
  {tag:'File extensions',q:'Which extension is commonly used for a comma-separated values data file?',o:['.csv','.mp4','.exe','.jpg'],a:0},
  {tag:'Word problem',q:'You need to find a document in a folder containing many files. You remember one word in its name. What can you do?',o:['Use the folder’s search box and type the word','Press Ctrl + P to search file names','Rename every file','Open each file and change its extension'],a:0},
  {tag:'Word problem',q:'You receive a link to a shared document but need your own editable copy. What should you check?',o:['Whether you have permission and can use the application’s Make a copy or Save As option','Whether renaming the browser gives you access','Whether Ctrl + X can copy the online file','Whether the link’s text ends in .mp3'],a:0},
  {tag:'Computer shortcuts',q:'You are editing a long document and want to select one word without selecting the whole document. What is a sensible method?',o:['Use the mouse to select that word, then apply the formatting','Press Ctrl + A, which selects just the current word','Press Ctrl + P, then select the word','Press Ctrl + S to highlight the word'],a:0},
  {tag:'Online safety',q:'A website asks to save your password on a shared office computer. What should you do?',o:['Decline to save it and sign out when finished','Save it so the next person can log in faster','Write it in a public note on the desktop','Send it to a coworker for safekeeping'],a:0},
  {tag:'Word problem',q:'You changed a file name from notes.docx to notes.pdf, but it still opens as a Word document. Why?',o:['Changing the name ending does not convert the file format','The computer needs a faster internet connection','PDF files can only contain audio','The file must be uploaded before it changes'],a:0},
];

function arrangeQuestionsByDifficulty(){
  const easyIndexes=new Set([0,1,2,3,4,5,7,8,9,10,11,12,15,16,18,19,41,42,43,44]);
  const intermediateIndexes=new Set([6,13,14,17,20,21,22,23,24,25,26,27,28,29,30,31,45,46,47,48]);
  const buckets={easy:[],intermediate:[],hard:[]};
  questions.forEach((question,index)=>{
    question.level=easyIndexes.has(index)?'easy':intermediateIndexes.has(index)?'intermediate':'hard';
    buckets[question.level].push(question);
  });
  const pattern=['easy','intermediate','easy','hard','intermediate'];
  const mixed=Array.from({length:questions.length},(_,index)=>buckets[pattern[index%pattern.length]].shift());
  questions.splice(0,questions.length,...mixed);
}

const welcome = document.querySelector('#welcome');
const quiz = document.querySelector('#quiz');
const result = document.querySelector('#result');
const area = document.querySelector('#question-area');
const timer = document.querySelector('#timer');
const timeText = document.querySelector('#time-text');
const countText = document.querySelector('#question-count');
const answeredText = document.querySelector('#answered-count');
const progressBar = document.querySelector('#progress-bar');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const submitBtn = document.querySelector('#submit-btn');
let current = 0;
let answers = Array(questions.length).fill(null);
let secondsLeft = 60 * 60;
let intervalId;

function shuffleQuestionOptions(){
  questions.forEach(item=>{
    const options=item.o.map((text,index)=>({text,isCorrect:index===item.a}));
    for(let index=options.length-1;index>0;index--){
      const swapIndex=Math.floor(Math.random()*(index+1));
      [options[index],options[swapIndex]]=[options[swapIndex],options[index]];
    }
    item.o=options.map(option=>option.text);
    item.a=options.findIndex(option=>option.isCorrect);
  });
}

function renderQuestion(){
  const item=questions[current];
  countText.textContent=`Question ${current+1} of ${questions.length}`;
  answeredText.textContent=`${answers.filter(a=>a!==null).length} answered`;
  progressBar.style.width=`${((current+1)/questions.length)*100}%`;
  area.innerHTML=`<div class="question-tag">${item.tag}</div><h2 class="question">${item.q}</h2><div class="options" role="group" aria-label="Answer choices">${item.o.map((option,index)=>`<button class="option ${answers[current]===index?'selected':''}" type="button" aria-pressed="${answers[current]===index}" data-index="${index}"><span class="option-letter">${String.fromCharCode(65+index)}</span><span>${option}</span></button>`).join('')}</div>`;
  area.querySelectorAll('.option').forEach(button=>button.addEventListener('click',()=>{answers[current]=Number(button.dataset.index);renderQuestion()}));
  prevBtn.disabled=current===0;
  nextBtn.hidden=current===questions.length-1;
  submitBtn.hidden=current!==questions.length-1;
}
function updateTimer(){
  const mins=Math.floor(secondsLeft/60),secs=secondsLeft%60;
  timeText.textContent=`${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
  if(secondsLeft<=300)timer.classList.add('warning');
  if(secondsLeft<=0){clearInterval(intervalId);finishTest(true)}
  secondsLeft--;
}
function finishTest(timeExpired=false){
  clearInterval(intervalId);
  const correct=answers.reduce((sum,answer,index)=>sum+(answer===questions[index].a?1:0),0);
  const score=Math.round(correct/questions.length*100);
  const unanswered=answers.filter(answer=>answer===null).length;
  const message=score>=80?'Great work! You have a strong start with everyday computer skills.':score>=50?'Good effort. Review the topics you found tricky and keep practising.':'Thanks for completing the test. A little practice with these basics will help build confidence.';
  welcome.hidden=true;quiz.hidden=true;result.hidden=false;
  result.innerHTML=`<div class="result-mark" aria-hidden="true">${score>=50?'✓':'↗'}</div><div class="eyebrow" style="justify-content:center">TEST COMPLETE</div><h2>Your result</h2><p class="result-lede">Basic Computer Skills Test</p><div class="score-box"><strong>${score}</strong><span>/ 100</span></div><div class="result-stats"><div><strong>${correct} / ${questions.length}</strong>Correct answers</div><div><strong>${questions.length-correct} / ${questions.length}</strong>Incorrect</div><div><strong>${unanswered}</strong>Unanswered</div></div><p class="result-message">${timeExpired?'Time is up. ':''}${message}</p><button id="restart-btn" class="primary-btn" type="button">Try again <span aria-hidden="true">↻</span></button>`;
  document.querySelector('#restart-btn').addEventListener('click',()=>location.reload());
}
document.querySelector('#start-btn').addEventListener('click',()=>{arrangeQuestionsByDifficulty();shuffleQuestionOptions();welcome.hidden=true;quiz.hidden=false;renderQuestion();updateTimer();intervalId=setInterval(updateTimer,1000)});
prevBtn.addEventListener('click',()=>{if(current>0){current--;renderQuestion()}});
nextBtn.addEventListener('click',()=>{if(current<questions.length-1){current++;renderQuestion()}});
submitBtn.addEventListener('click',()=>finishTest());
