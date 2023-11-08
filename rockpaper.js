let choice;
let randomNumber;
let compChoice;
let message;
let mydiv;
let myp;
let wins = 0; 
let loss = 0; 
let ties = 0;
myp = document.getElementById('list');
mydiv = document.getElementById('write');
function compare(choice, randomNumber){
    if(randomNumber <= 1/3 && randomNumber>=0){
        compChoice = "rock";
    }
    else if(randomNumber > 1/3 && randomNumber <= 2/3){
        compChoice = "scissors";
    }
    else{
        compChoice = "paper";
    }
    if(compChoice == choice){
        ties+=1;
        myp.innerHTML = ' You chose ' + choice+ ' Computer chose ' + compChoice+ ' it is a tie';
        mydiv.innerHTML='Wins: '+wins+ ' Loss: '+ loss +'Ties: '+ties;
    }
    else if(compChoice == "rock" && choice == "scissors"){
        loss+=1;
        myp.innerHTML = ' You chose ' + choice+ ' Computer chose ' + compChoice+ ' You lose';
        mydiv.innerHTML='Wins: '+wins+ ' Loss: '+ loss +' Ties: '+ties;
    }
    else if(compChoice == "scissors" && choice == "rock"){
        wins+=1;
        myp.innerHTML = ' You chose ' + choice+ ' Computer chose ' + compChoice+ ' You win';
        mydiv.innerHTML='Wins: '+wins+ ' Loss: '+ loss +' Ties: '+ties;
    }
    else if(compChoice == "paper" && choice == "rock"){
        loss+=1;
        myp.innerHTML = ' You chose ' + choice+ ' Computer chose ' + compChoice+ ' You lose.';
        mydiv.innerHTML='Wins: '+wins+ ' Loss: '+ loss +' Ties: '+ties;
    }
    else if(compChoice == "rock" && choice == "paper"){
        wins+=1;
        myp.innerHTML = ' You chose ' + choice+ ' Computer chose ' + compChoice+ ' You win';
        mydiv.innerHTML='Wins: '+wins+ ' Loss: '+ loss +' Ties: '+ties;
    }
    else if(compChoice =="paper" && choice == "scissors"){
        wins+=1;
        myp.innerHTML = ' You chose ' + choice+ ' Computer chose ' + compChoice+ ' You win';
        mydiv.innerHTML='Wins: '+wins+ ' Loss: '+ loss +' Ties: '+ties;
    
    }
    else{
        loss+=1
        myp.innerHTML = 'You chose ' + choice+ ' Computer chose ' + compChoice+ ' You lose';
        mydiv.innerHTML='Wins: '+wins+ ' Loss: '+ loss +' Ties: '+ties;
    }

    
}
function reset(){
    ties = 0;
    wins = 0; 
    loss = 0; 
}
