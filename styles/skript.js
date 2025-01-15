 /**STYLE COMMUN  ET FUNCTION COMMUNE  */



let hamburgerMenu = document.querySelector(".header_hamburger-menu");
let headerMenu = document.querySelector(".header_menu");
let fabars = hamburgerMenu.querySelector(".fa-bars");
let form_natur = document.querySelector('#form_natur_quiz');
let result = document.getElementById("quiz_result");
let reset = document.getElementById('quiz_reset');
let submit = document.getElementById("natur_quiz_submit");


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

document.addEventListener("click", function(event){
     // Vérifie si le clic est en dehors du menu et du bouton hamburger
      //event.target contient l'element sur lequel on clique
      //La propriété target dans un événement JavaScript représente l'élément sur lequel l'événement a été déclenché.
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
/*FUNCTION DE QUIZ */

function funcQuiz(submit, answers, result, reset) {
    submit.addEventListener("click", () => {
        console.log("Quiz Submited")
        let score = 0; 
      
        Object.keys(answers).forEach(function(key){
          let userAnswer = document.querySelector(`input[name="${key}"]:checked`);
          if (userAnswer && userAnswer.value === answers[key]) {
            score++;
          }
        });
      
        result.textContent = `Du hast ${score} von ${Object.keys(answers).length} Fragen richtig beantwortet!`;
        result.classList.remove("hidden");
        reset.classList.remove("hidden");
      });

    reset.addEventListener("click" , () =>{
        console.log("Quiz zuruecksetzen")
        let score= 0;
        form_natur.reset();
        reset.classList.add("hidden");
        result.classList.add("hidden");


        })
      
};


 /*----------------------------------------start_naturwissenschaft--------------------------------------------*/
if(document.body.id === 'naturwissenschaft_page' ){

let lightCandleButton = document.getElementById('lightCandle');
let resetButton = document.getElementById('resetExperiment');
let flame = document.getElementById('flame');
let glass = document.getElementById('glass');
let resultText = document.getElementById('result_text');
let water = document.querySelector('.water'); 
let isCandleLight = false;
let goupbtn = document.querySelector('#go_up_button')

    let audio = new Audio('Audio\\Carefree(chosic.com).mp3');
    audio.volume = 0.01; // Définit le volume à 10 % de sa capacité maximale
    audio.loop = true;
    
    let toggleButtonAudio = document.getElementById("audio-toggle");
    let audioIcon = document.getElementById("audio-icon");
    let statusText = document.getElementById("audio-status");
    
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

    let revealButton = document.getElementById('reveal-button');
    let answer = document.getElementById('answer');

    revealButton.addEventListener('click', function(){
        answer.classList.toggle('hidden'); // ajoute ou enleve le hidden si il est present
        if(answer.classList.contains('hidden')){
            revealButton.textContent = "Antwort zeigen";
        }else{
            revealButton.textContent = "Antwort vertecken"; 
        }
        
    });
    let answers = {
        q1: "b",
        q2: "b", 
        q3: "b", 
        q4: "b"
    };
    
    funcQuiz(submit, answers, result, reset);
    
lightCandleButton.addEventListener("click", function(){
    if (!isCandleLight){
        // allume la flamme
        flame.style.display = "block";
        isCandleLight = true
    }else{
        putGlass();

    }
});

resetButton.addEventListener("click",resetExperiment);
//setTimeout(callbackFunction, delay); deslay en milliseconde

function putGlass(){
    lightCandleButton.disabled = true;
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

 }
  /*----------------------------------------end_naturwissenschaft--------------------------------------------*/

/*----------------------------------------start_informatik--------------------------------------------*/
 if(document.body.id === 'informatik_body'){
    document.addEventListener('DOMContentLoaded', () => {
        let submitButton = document.getElementById('submit');
        let feedback = document.getElementById('feedback');
        let successSound = document.getElementById('successSound');
        let failureSound = document.getElementById('failureSound');
    
        function playSound(sound) {
            sound.currentTime = 0;
            sound.play();
        }
    
        submitButton.addEventListener('click', () => {
            let correctCount = 0;
            let totalQuestions = 10;
    
            for (let i = 1; i <= totalQuestions; i++) {
                let answers = document.getElementsByName(`q${i}`);
                answers.forEach(answer => {
                    if (answer.checked && answer.value === 'correct') {
                        correctCount++;
                    }
                });
            }
    
    
            if (correctCount === totalQuestions) {
                feedback.textContent = `🎉  Herzlichen Glückwunsch! Sie haben  ${correctCount}/${totalQuestions}  richtige Antworten.`;
                feedback.className = 'correct';
                playSound(successSound);
            } else {
                feedback.textContent = `😢 Sie haben ${correctCount}/${totalQuestions} richtige Antworten. Versuchen Sie es noch einmal!`;
                feedback.className = 'incorrect';
                playSound(failureSound);
            }
    
            feedback.classList.remove('hidden');
        });
    });
    
    function runCode() {
        let htmlCode = document.getElementById("html-code").value;
        let cssCode = document.getElementById("css-code").value;
        let jsCode = document.getElementById("js-code").value;
    
        let output = document.getElementById("output").contentWindow.document;
    
        let fullCode = `
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
 }
/*--------------------------------------------------end_informatik------------------------------------------------------*/

/*---------------------------------------------------start_mathe-----------------------------------------------------------*/
if(document.body.id === 'mathe_body'){

let show = document.querySelector("#show");
let btnsum = document.getElementById("btnsum");
let sticky = document.getElementById("stick");
let submit1 = document.getElementById("mathe_quiz_submit");
    let answers1 = {
        u1q1: "Halb",
        u1q2: "Drittel", 
        u1q3: "Viertel", 
        u1q4: "Fünftel",
        u1q5: "Sechstel",
        u1q6: "Siebtel",
        u1q7:"Achtel",
        u4q1: "Kreis",
        u4q2: "dreieck", 
        u4q3: "rechteck", 
     
    };
    let result1 = document.getElementById("mathe_quiz_result");
    funcQuiz(submit1, answers1, result1);


btnsum.addEventListener('click', (e)=> {

                e.preventDefault();
                console.log("inside 1")
                let n1=document.getElementById("l1").value;
                let n2=document.getElementById("l2").value;
                let sum = parseInt(n1)+parseInt(n2);

                if((n1=="")||(n2=="")){
                    if((isNaN(n1)) || (isNaN(n2))) {
                        show.innerHTML = `attention il y a un champ vide et un champ non numerique!! 
                        <div class="inal"><button id="btnres" type="button">Reset</button>`;
                        resetAlgebra();
                        return 0;
                    }
                        show.innerHTML = `attention il y a un champ vide
                        <div class="inal"><button id="btnres" type="button">Reset</button>`;
                        resetAlgebra();
                        return 0;
                    }else if((isNaN(n1)) || (isNaN(n2))) {
                        show.innerHTML = `attention il y a un champ non numerique!!
                        <div class="inal"><button id="btnres" type="button">Reset</button>`;
                        resetAlgebra();
                        return 0;
                    }

                if( n1>n2){
                    var max = n1;
                }
                else{
                    var min = n2;
                }
                        
                show.innerHTML = `<p>Summe = ${sum}</p> <p>max = ${max}</p> <p>min = ${min}</p>
                                <div class="inal"><button id="btnres" type="button">Reset</button>`
                resetAlgebra();

            });

    function resetAlgebra(){
        btnsum.style.display = "none"
        show.style.display = "block"
        document.getElementById("btnres").addEventListener('click', ()=> {
                console.log("5555")
                btnsum.style.display = "block"
                show.style.display = "none"
                sticky.reset();
            });
    }

            let submitBtn = document.getElementById("mathe_quiz_submit");
            let answers = [
                     "Halb",
                     "Drittel", 
                     "Viertel", 
                     "Fünftel",
                     "Sechstel",
                     "Siebtel",
                     "Achtel"
            ];
            let result = document.getElementById("mathe_quiz_result");
            let answerEls = document.querySelectorAll(".answer");
            //let selectedInput = document.querySelector();
            currentQuiz = 0;
            score = 0
            function getSelected(){
                let answer;
                answerEls.forEach(answerEl => {
                    if(answerEl.checked){
                        answer = answerEl.id;
                    }
                    
                })
                return answer;

            };

submitBtn.addEventListener('click',()=> {
    let answer = getSelected();
    console.log(answers[currentQuiz])
    if(answer === answers[currentQuiz]){
        
        score++;
    }

    currentQuiz++
    if(currentQuiz === answers.length ){
        result.textContent = `Du hast ${score} von ${answers.length} Fragen richtig beantwortet!`;
        result.classList.remove("hidden");
    }

})
}
 /*---------------------------------------------end_mathe-----------------------------------------*/