
   const btns=document.querySelectorAll('button');
    
    let score1=document.querySelector('span#pscore');
    let score2=document.querySelector('span#cscore');
    let playerScore=0;
    let computerScore=0;
    
    

    
    btns.forEach((btn) => {
        
        btn.addEventListener('click', (e) =>{
            
            
            const computerSelection=computerplay();
            const playerSelection=btn.id;
            playRound(playerSelection,computerSelection);
            console.log(computerSelection);
            score1.textContent=playerScore;
            score2.textContent=computerScore;
            if(playerScore==5){
                alert('YOU ARE THEEEEEEE WINNER');
                playerScore=0;
                computerScore=0;
                score1.textContent=playerScore;
                score2.textContent=computerScore;
            } 
            if(computerScore==5){
                alert('CONPUTER WIN');
                playerScore=0;
                computerScore=0;
                score1.textContent=playerScore;
                score2.textContent=computerScore;
            } 
            

        });
   
    });


    let computerplay=()=>{
        let choice=['rock','paper','scissor'];
        randnum=Math.floor(Math.random()*choice.length);
        randword=choice[randnum];
        return randword;
    }

    function playRound(playerSelection,computerSelection){
        playerselection=playerSelection.toLowerCase();
        computerselection=computerSelection.toLowerCase();

        if(playerselection==='rock' && computerselection=='paper')
        {
            computerScore++;
            //console.log('you lose! Paper beat Rock')
        }else if(playerselection==='rock' && computerselection=='rock'){
            console.log('It is a draw');
        }else if(playerselection==='rock' && computerselection=='scissor'){
           
            playerScore++;
        }else if(playerselection==='paper' && computerselection=='paper'){
            console.log('It is a draw');
        }else if(playerselection==='paper' && computerselection=='rock'){
            
            playerScore++;
        }else if(playerselection==='paper' && computerselection=='scissor'){
           
            computerScore++;
        }else if(playerselection==='scissor' && computerselection=='paper'){
            
            playerScore++;
        }else if(playerselection==='scissor' && computerselection=='scissor'){
            console.log('It is a draw');
        }else if(playerselection==='scissor' && computerselection=='rock'){
            
            computerScore++;
        }else{
            console.log('Wrong selection');
        }
        
    }

    function games(){
        for(let i=0;i<5;i++){
            const playerSelection=prompt('Enter your choice');
             const computerSelection=computerplay();
            playRound(playerSelection,computerSelection);
            
        }
        console.log('Your score:'+playerScore);
        console.log('Computer score:'+computerScore);
        if(playerScore>computerScore){
            console.log('You are the winner');
        }else if(playerScore<computerScore){
            console.log('You are the looser');
        }else{
            console.log('I is a draw');
        }
        
        
    }