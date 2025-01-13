

const show = document.querySelector("#show");
const btnsum = document.getElementById("btnsum");
const sticky = document.getElementById("stick");
btnsum.addEventListener('click', (e)=> {

                e.preventDefault();
                console.log("inside 1")
                const n1=document.getElementById("l1").value;
                const n2=document.getElementById("l2").value;
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

            const submitBtn = document.getElementById("mathe_quiz_submit");
            const answers = [
                     "Halb",
                     "Drittel", 
                     "Viertel", 
                     "Fünftel",
                     "Sechstel",
                     "Siebtel",
                     "Achtel"
            ];
            const result = document.getElementById("mathe_quiz_result");
            let answerEls = document.querySelectorAll(".answer");
            //let selectedInput = document.querySelector();
            currentQuiz = 0;
            score = 0
            function getSelected(){
                let answer;
                answerEls.forEach(answerEl => {
                    if(answerEl.checked){
                        answer =answerEl.id;
                    }
                    
                })
                return answer;

            };

submitBtn.addEventListener('click',()=> {
    const answer = getSelected();
    console.log(answers[currentQuiz])
    if(answer === answers[currentQuiz]){
        
        score++;
    }

    currentQuiz++
    if(currentQuiz = answers.length ){
        result.textContent = `Du hast ${score} von ${answers.length} Fragen richtig beantwortet!`;
        result.classList.remove("hidden");
    }

})