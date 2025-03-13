const Questions = [
    {
        q: "Fill in the blank: Why did Jesus Christ died for us _____.",
        a: [{text: "For his Lifer.", isCorrect: false},
            {text: "For his own good.", isCorrect: false},
            {text: "For ours sins.", isCorrect: true},
            {text: "Cause he want to.", isCorrect: false},
           ]
    },
    {
        q: "Why did the roman empire see Jesus Christ as a Threat?",
        a: [{text: "He challenged their authority, social traditons and religious beliefs and The romans empire only believe into one god.", isCorrect: true},
            {text: "Cause he was a big threat to the roman empire cause he was a horrible person.", isCorrect: false},
            {text: "He was a spy for other empires.", isCorrect: false},
            {text: "Cause he wanted all the power in the world.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank:  Jesus Christ came back from the dead after _____ when his death happened.",
        a: [{text: "A month.", isCorrect: false},
            {text: "A week.", isCorrect: false},
            {text: "5 Days.", isCorrect: false},
            {text: "3 Days.", isCorrect: true},
           ]
    },
    {
        q: "How many people saw Jesus Christ come back from the dead?",
        a: [{text: "Over 1,000.", isCorrect: false},
            {text: "Over 500.", isCorrect: true},
            {text: "Over 8,000.", isCorrect: false},
            {text: "Over 2,000.", isCorrect: false},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}