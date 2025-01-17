 /**STYLE COMMUN  ET FUNCTION COMMUNE  */

 const hamburgerMenu = document.querySelector(".header_hamburger-menu");
 const headerMenu = document.querySelector(".header_menu");
 const fabars = hamburgerMenu.querySelector(".fa-bars");
 const goupbtn = document.querySelector('#go_up_button');
 
 
 
  hamburgerMenu.addEventListener("click", function () {
     let isMenuActive = headerMenu.classList.toggle("active");
     /*Ajoute la classe active  si elle n'est pas definie et la supprine si elle l'est */
     if (isMenuActive ) {
         fabars.classList.replace("fa-bars", "fa-close"); 
     }
     else {
         fabars.classList.replace("fa-close", "fa-bars");
     }
 
     hamburgerMenu.setAttribute("aria-expanded", isMenuActive);
     headerMenu.setAttribute("aria-hidden", !isMenuActive);
     
   });
 
 /*Vérifie si le clic est en dehors du menu et du bouton hamburger
       event.target contient l'element sur lequel on clique
       La propriété target dans un événement JavaScript représente l'élément sur lequel l'événement a été déclenché.*/
 
   document.addEventListener("click", function(event){
     if(!headerMenu.contains(event.target) && !hamburgerMenu.contains(event.target)){
         headerMenu.classList.remove("active");
         fabars.classList.replace("fa-close", "fa-bars");
         hamburgerMenu.setAttribute("aria-expanded",false);
         headerMenu.setAttribute("aria-hidden",true);
     }
     console.log(event.target);
 
 });
 
 
 window.addEventListener("resize", function () {
   if (window.matchMedia("(min-width: 768px)").matches) {
     headerMenu.classList.remove("active");
     fabars.classList.replace("fa-close", "fa-bars");
     hamburgerMenu.setAttribute("aria-expanded", false);
     headerMenu.setAttribute("aria-hidden", false);
   } else {
     if (!headerMenu.classList.contains("active")) {
       headerMenu.setAttribute("aria-hidden", true);
     }
   }
 });
 
 window.addEventListener("scroll" , checkHeight);
 
 function checkHeight(){
     if (window.scrollY > 150) {
         goupbtn.style.display = 'flex';
     } else {
         goupbtn.style.display = 'none';
     }
     
 };
 
 goupbtn.addEventListener("click", function(){
     window.scrollTo({
         top: 0,
         behavior:"smooth"
 
     })
 
 });
 
 function playSound(sound) {
     sound.currentTime = 0;
     sound.play();
 };
 
 function allQuizresponse(result, totalQuestions, successSound, failureSound){
     let correctCount = 0;
    
     for (let i = 1; i <= totalQuestions; i++) {
         if(document.body.id === "informatik_body"){
             var answers = document.getElementsByName(`q${i}`);
         }
         else if(document.body.id === "mathe_body"){
             var answers = document.getElementsByName(`q${i}`);
         }
         else(document.body.id === "naturwissenschaft_page")
         {
             var answers = document.getElementsByName(`q${i}`);
         }
         console.log(i)
         answers.forEach(answer => {
             if (answer.checked && answer.value === 'correct') {
                 correctCount++;
             }
         });
         
     }
     if (correctCount === totalQuestions) {
         result.textContent = `🎉  Herzlichen Glückwunsch! Sie haben  ${correctCount}/${totalQuestions}  richtige Antworten.`;
         console.log("srgsrgr")
         result.className = 'correct';
         playSound(successSound);
     } else {
         result.textContent = `😢 Sie haben ${correctCount}/${totalQuestions} richtige Antworten. Versuchen Sie es noch einmal!`;
         result.className = 'incorrect';
         playSound(failureSound);
         console.log("srgsrgr")
     }
     
 };
 
 
 
  /*----------------------------------------start_naturwissenschaft--------------------------------------------*/
 
 
 if(document.body.id === 'naturwissenschaft_page' ){
 
 const lightCandleButton = document.getElementById('lightCandle');
 const resetButton = document.getElementById('resetExperiment');
 const flame = document.getElementById('flame');
 const glass = document.getElementById('glass');
 const resultText = document.getElementById('result_text');
 const water = document.querySelector('.water'); 
 const submit = document.getElementById("natur_quiz_submit");
 const reset = document.getElementById('natur_quiz_reset');
 const result = document.getElementById("natur_quiz_result");
 const form_natur = document.querySelector('#form_natur_quiz');
 const revealButton = document.getElementById('reveal_button');
 const toggleButtonAudio = document.getElementById("audio-toggle");
 const audioIcon = document.getElementById("audio-icon");
 const statusText = document.getElementById("audio-status");
 const answerreveal = document.getElementById('answer');
 let isCandleLight = false;
 let audio = new Audio('Audio\\Carefree(chosic.com).mp3');
 
 audio.volume = 0.01; // Définit le volume à 10 % de sa capacité maximale
 audio.loop = true;
 
     revealButton.addEventListener('click', function(){
         answerreveal.classList.toggle('hidden'); // ajoute ou enleve le hidden si il est present
         if(answerreveal.classList.contains('hidden')){
             revealButton.textContent = "Antwort zeigen";
         }else{
             revealButton.textContent = "Antwort vertecken"; 
         }
         
     });
 
 
 
 toggleButtonAudio.addEventListener('click', function(){
     if(!audio.paused){
         audio.pause();
         audioIcon.classList.replace("fa-volume-up", "fa-volume-mute");
         statusText.textContent = "Musik ausgeschaltet";
     }
     else{
         audio.play()
         audioIcon.classList.replace("fa-volume-mute", "fa-volume-up");
         statusText.textContent = "Musik eingeschaltet";
     }
 });
 
 
 lightCandleButton.addEventListener("click", function(){
     if (!isCandleLight){
         // allume la flamme
         flame.style.display = "block";
         isCandleLight = true;
         lightCandleButton.textContent = 'Ein Glas drauf stellen';
 
     }else{
     putGlass();
 
     }
 });
 
 resetButton.addEventListener("click",resetExperiment);
 //setTimeout(callbackFunction, delay); deslay en milliseconde
 
 function putGlass(){
     glass.style.width = '120px'
     glass.style.height = '200px'
 
     setTimeout(function() {
         water.style.height = '150px'; 
         resultText.classList.remove('hidden');
         resetButton.style.display = 'inline-block';
         lightCandleButton.style.display ="none"
         flame.style.display = 'none';
     }, 2000); 
     
 }
 function resetExperiment(){
     flame.style.display ="none";
     glass.style.width = '0';
     glass.style.height = '0';
     water.style.height = '100px';
     resultText.classList.add("hidden");
     lightCandleButton.style.display = 'inline-block';
     lightCandleButton.textContent = 'Kerze anzünden';
     resetButton.style.display = 'none';
     isCandleLight = false;
 
 }
 
 submit.addEventListener('click', () => {
     allQuizresponse(result, 4, successSound, failureSound);
     reset.classList.remove("hidden");
     submit.classList.add("hidden");
     reset.addEventListener("click" , () =>{
         console.log("Quiz zuruecksetzen")
         submit.classList.remove("hidden");
         result.classList.remove('hidden');
         form_natur.reset();
         reset.classList.add("hidden");
         result.classList.add("hidden");
 
 
         });
 });
 
 };
 /*----------------------------------------end_naturwissenschaft--------------------------------------------*/
 
 
 /*----------------------------------------start_informatik--------------------------------------------*/
  if(document.body.id === 'informatik_body'){
     document.addEventListener('DOMContentLoaded', () => {
         const info_quiz_submit = document.getElementById('info_quiz_submit');
         const feedback = document.getElementById('feedback');
         const info_reset = document.getElementById("info_quiz_reset");
         const successSound = document.getElementById('successSound');
         const failureSound = document.getElementById('failureSound');
         const form_info = document.getElementById('info_form');
         
         info_quiz_submit.addEventListener('click', () => {
             allQuizresponse(feedback, 10 , successSound, failureSound);
             info_reset.classList.remove('hidden');
             info_quiz_submit.classList.add("hidden");
             info_reset.addEventListener("click" , () =>{
                 info_quiz_submit.classList.remove("hidden")
                 feedback.classList.remove('hidden');
                 form_info.reset();
                 info_reset.classList.add("hidden");
                 feedback.classList.add("hidden");
                
 
             });
         });
     });
     
     function runCode() {
         const htmlCode = document.getElementById("html-code").value;
         const cssCode = document.getElementById("css-code").value;
         const jsCode = document.getElementById("js-code").value;
     
         const output = document.getElementById("output").contentWindow.document;
     
         const fullCode = `
           <html>
             <head>
               <style>${cssCode}</style>
             </head>
             <body>
               ${htmlCode}
               <script>${jsCode}<\/script>
             </body>
           </html>
         `;
     
     
         output.open();
         output.write(fullCode);
         output.close();
     }
  };
 /*--------------------------------------------------end_informatik------------------------------------------------------*/
 
 /*---------------------------------------------------start_mathe-----------------------------------------------------------*/
 if(document.body.id === 'mathe_body'){
 
 const show = document.querySelector("#show");
 const btnsum = document.getElementById("btnsum");
 const sticky = document.getElementById("stick");
 const submitMathe = document.getElementById("mathe_quiz_submit");
 const resultMathe = document.getElementById("mathe_quiz_result");
 const resetMathe = document.getElementById("mathe_quiz_reset");
 const form_mathe_u1 = document.getElementById("form_mathe_u1");
 const form_mathe_u2 = document.getElementById("form_mathe_u2");
     //funcQuiz(submit1, answers1, result1);
 
 submitMathe.addEventListener('click', () => {
     allQuizresponse(resultMathe, 10 , successSound, failureSound)
 
     resetMathe.style.display = "block"
     submitMathe.style.display = "none"
     resultMathe.style.display = "block"
     resetMathe.addEventListener("click" , () =>{
         form_mathe_u1.reset();
         form_mathe_u2.reset();
         resetMathe.style.display = "none"
         resultMathe.style.display = "none"
         submitMathe.style.display = "block"
         console.log("Quiz zuruecksetzen")
 
         });
 });
 
 
 
 btnsum.addEventListener('click', (e)=> {
 
     e.preventDefault();
     console.log("inside 1")
     document.getElementById("btnres").style.display = "block"
     const n1=document.getElementById("l1").value;
     const n2=document.getElementById("l2").value;
     let sum = parseInt(n1)+parseInt(n2);
     let sub = parseInt(n1)-parseInt(n2);
     let min,max;
         
 
     if((n1=="")||(n2=="")){
         if((isNaN(n1)) || (isNaN(n2))) {
             show.innerHTML = `attention il y a un champ vide et un champ non numerique!! `;
             resetAlgebra();
             return 0;
         }
             show.innerHTML = `Achtung! leeres Feldes vorhanden`;
             resetAlgebra();
             return 0;
         }else if((isNaN(n1)) && (isNaN(n2))) {
             show.innerHTML = `attention il y a un champ non numerique!!`;
             resetAlgebra();
             return 0;
         }
 
     if( n1>n2){
         max = n1;
         min = n2;
     }
     else{
         max = n2;
         min = n1;
     }
             
     show.innerHTML = `<p>Summe:${n1} + ${n2} = ${sum}</p> <p>sub:${n1} - ${n2} = ${sub}</p> <p>max = ${max}</p> <p>min = ${min}</p> `
     resetAlgebra();
 
 });
 
 function resetAlgebra(){
     btnsum.style.display = "none"
     show.style.display = "block"
     document.getElementById("btnres").addEventListener('click', ()=> {
             btnsum.style.display = "block"
             show.style.display = "none"
             document.getElementById("btnres").style.display = "none"
             sticky.reset();
         });
 }
 
 };
 
  /*---------------------------------------------end_mathe-----------------------------------------*/

  /*---------------------------------start Mystery-box------------------------------------- */
  if(document.body.id === "mytery_body"){
    const mysteryform = document.querySelector("#form_mystry-box");
    const mytery_submit = document.querySelector('#mystery_submit');

    mysteryform.addEventListener("click", function(){
        mytery_submit.reset();

    });



  };

/*---------------------------------End Mystery-box------------------------------------- */



