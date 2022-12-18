const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Função começar o jogo 
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    // Jogar o jogo 
    const playMatch =() => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.mao-jogador');
        const computerHand = document.querySelector('.mao-computador');
        const hands = document.querySelectorAll('.maos img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })


        // Opções do computador (gerar numeros aleatorios)
        const computerOptions = ['pedra', 'papel', 'tesoura'];

        options.forEach((option) => {
            option.addEventListener('click', function(){
                // Escolha do computador
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //Aqui é onde chamamos a comaparação de mãos
                compareHands(this.textContent, computerChoice);
                // Update Images 
                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`;
                }, 2000)
                
                // Animação
                playerHand.style.animation = "shakeJogador 2s ease";
                computerHand.style.animation = "shakeComputador 2s ease";
            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.jogador-score p');
        const computerScore = document.querySelector('.computador-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.vencedor');
        // Verificar se há um empate
        if(playerChoice === computerChoice){
            winner.textContent = 'É um empate!';
            return;
        }
        // Verificar pedra
        if(playerChoice === 'pedra'){
            if(computerChoice === 'tesoura'){
                winner.textContent = 'Jogador Ganhou!'
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computador Ganhou!';
                cScore++;
                updateScore();
                return;
            }
        }

        // Verificar papel 
        if(playerChoice === 'papel'){
            if(computerChoice === 'tesoura'){
                winner.textContent = 'Computador Ganhou!'
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Jogador Ganhou!';
                pScore++;
                updateScore();
                return;
            }
        }

        // Verificar tesoura
        if(playerChoice === 'tesoura'){
            if(computerChoice === 'pedra'){
                winner.textContent = 'Computador Ganhou!'
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Jogador Ganhou!';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    // Chamar todas as funções interiores
    startGame();
    playMatch();
}

// Começar a função do jogo

game();