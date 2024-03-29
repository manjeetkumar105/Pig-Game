var roundScore, scores, activePlayer, gamePlaying;

    init();

    var lastDice;
// document.querySelector('#current-0').textContent = dice;

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.btn-roll').addEventListener('click', function () {

		if(gamePlaying){
				//Random Number
			var dice1 = Math.floor(Math.random() * 6) + 1;
			var dice2 = Math.floor(Math.random() * 6) + 1;

			//Display the result
			document.getElementById('dice-1').style.display = 'block';
			document.getElementById('dice-2').style.display = 'block';
			document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
			document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

			// if(dice1 !== 1 && dice2 !== 1){
			// 	//Add score
			// 	roundScore += dice1 + dice2;
			// 	document.querySelector('#current-' + activePlayer).textContent = roundScore;           
			// } else {
			// 	//next player
			// 	nextPlayer();
			// }

			//Update the round score IF rolled number was not 1
			if(dice === 6 && lastDice === 6){
				//player loses his score
				scores[activePlayer] = 0;
		        document.querySelector('#score-' + activePlayer).textContent = '0';
		        nextPlayer();
			}else if(dice !== 1){
				//Add score
				roundScore += dice;
				document.querySelector('#current-' + activePlayer).textContent = roundScore;           
			} else {
				//next player
				nextPlayer();
			}

			lastDice = dice;
    	}

	});

	document.querySelector('.btn-hold').addEventListener('click', function() {

		if(gamePlaying) {
				//add current score to global score
			scores[activePlayer] += roundScore;

			//update the UI
		    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		    var input = document.querySelector('.final-score').value;
		    var winningScore;

		    //undefined, 0, null and '' are all COERCED to false 
		    //Anything else is COERCED to true
		    if(input){
		    	input = winningScore;
		    }else {
		    	winningScore = 100;
		    }

			//check if player won the game 
			if(scores[activePlayer] >= winningScore){
				document.querySelector('#name-' + activePlayer).textContent = 'winner';
				document.getElementById('dice-1').style.display = 'none';
				document.getElementById('dice-2').style.display = 'none';
				document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
				document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
				gamePlaying = false;
			}else {
				//next player
			    nextPlayer();
			}

		}
	});

	function nextPlayer() {
		    activePlayer === 0? activePlayer = 1: activePlayer = 0;
			roundScore = 0;

			document.getElementById('current-0').textContent = 0;
			document.getElementById('current-1').textContent = 0;

			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');  

			// document.querySelector('player-0-panel').classList.toggle('active'); 
			// document.querySelector('player-0-panel').classList.toggle('active'); 

			document.getElementById('dice1').style.display = 'none';
			document.getElementById('dice2').style.display = 'none';
	}

	document.querySelector('.btn-new').addEventListener('click', init);

	function init() {
		scores = [0, 0];
		activePlayer = 0;
		roundScore = 0;
		gamePlaying = true;

        document.getElementById('dice-1').style.display = 'none';
		document.getElementById('dice-2').style.display = 'none';

		document.getElementById('score-0').textContent = '0';
		document.getElementById('score-1').textContent = '0';
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		document.getElementById('name-0').textContent = 'Player 1';
		document.getElementById('name-1').textContent = 'Player 2';

		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-0-panel').classList.add('active');
	}



