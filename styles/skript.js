let hamburgerMenu = document.querySelector(".fa-bars");
let headerMenu = document.querySelector(".header_menu");
let lightCandleButton = document.getElementById('lightCandle');
let resetButton = document.getElementById('resetExperiment');
let flame = document.getElementById('flame');
let glass = document.getElementById('glass');
let resultText = document.getElementById('result_text');
let water = document.querySelector('.water'); 
let isCandleLight = false;
let goupbtn = document.querySelector('#go_up_button')


hamburgerMenu.addEventListener("click", function () {
    let isMenuActive = headerMenu.classList.toggle("active");
    /*Ajoute la classe active  si elle n'est pas definie et la supprine si elle l'est */

    hamburgerMenu.setAttribute("aria-expanded", isMenuActive);
    headerMenu.setAttribute("aria-hidden", !isMenuActive);
    
  });

document.addEventListener("click", function(event){
     // Vérifie si le clic est en dehors du menu et du bouton hamburger
      //event.target contient l'element sur lequel on clique
      //La propriété target dans un événement JavaScript représente l'élément sur lequel l'événement a été déclenché.
    
    if(!headerMenu.contains(event.target) && !hamburgerMenu.contains(event.target)){
        headerMenu.classList.remove("active");
        hamburgerMenu.classList.setAttribute("aria-expanded",false);
        headerMenu.classList.setAttribute("aria-hidden",true);
    }
    console.log(event.target);

});

if(document.body.id === 'naturwissenschaft_page'){

    document.addEventListener('DOMContentLoaded', function(){
        try{
            audio.play();
        }catch(e){
            console.log('Autoplay nicht erfolgreich');
        }
    });
    
    
    let audio = new Audio('Audio\\Carefree(chosic.com).mp3');
    audio.volume = 0.1; // Définit le volume à 10 % de sa capacité maximale
    audio.loop = true;
    let isPalying = true;
    
    let toggleButtonAudio = document.getElementById("audio-toggle");
    let audioIcon = document.getElementById("audio-icon");
    let statusText = document.getElementById("audio-status");
    
    toggleButtonAudio.addEventListener('click', function(){
        if(isPalying){
            audio.pause();
            audioIcon.classList.replace("fa-volume-up", "fa-volume-mute");
            statusText.textContent = "Musik ausgeschaltet";
        }
        else{
            audio.play();
            audioIcon.classList.replace("fa-volume-mute", "fa-volume-up");
            statusText.textContent = "Musik eingeschaltet";
        }
        isPalying=!isPalying;
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

}


function funcQuiz(submit, answers, result) {
    console.log("no")
    submit.addEventListener("click", () => {
        console.log("yes")
        let score = 0; 
      
        Object.keys(answers).forEach(function(key){
          let userAnswer = document.querySelector(`input[name="${key}"]:checked`);
          if (userAnswer && userAnswer.value === answers[key]) {
            score++;
          }
        });
      
        result.textContent = `Du hast ${score} von ${Object.keys(answers).length} Fragen richtig beantwortet!`;
        result.classList.remove("hidden");
      });
      
};

if(document.body.id === 'naturwissenschaft_page'){
    const submit = document.getElementById("quiz_submit");
    const answers = {
        q1: "b",
        q2: "b", 
        q3: "b", 
        q4: "b"
};
    const result = document.getElementById("quiz_result");
    funcQuiz(submit, answers, result);
}else if(document.body.id === 'mathe_body'){
    const submit1 = document.getElementById("mathe_quiz_submit");
    const answers1 = {
        u1q1: "Halb",
        u1q2: "Drittel", 
        u1q3: "Viertel", 
        u1q4: "Fünftel",
        u1q5: "Sechstel",
        u1q6: "Siebtel",
        u2q1: "zwei_Halbe",
        u2q2: "zwei_Drittel", 
        u2q3: "drei_Viertel", 
        u2q4: "fünf_Sechstel",
        u2q5: "sieben_Achtel",
        u3q1: "D",
        u3q2: "B", 
        u3q3: "D", 
        u3q4: "C",
        u4q1: "Kreis",
        u4q2: "dreieck", 
        u4q3: "rechteck", 
     
    };
    const result1 = document.getElementById("mathe_quiz_result");
    funcQuiz(submit1, answers1, result1);
}



lightCandleButton.addEventListener("click", function(){
    if (!isCandleLight){
        // allume la flamme
        flame.style.display = "block";
        isCandleLight = true
        lightCandleButton.textContent = 'Glas darüber stellen';
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
        lightCandleButton.style.display = 'none';
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