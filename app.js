var roundScore, scores, activePlayer, gamePlaying;

    init();

// document.querySelector('#current-0').textContent = dice;
	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.btn-roll').addEventListener('click', function () {

		if(gamePlaying){
		    //Random Number
			var dice = Math.floor(Math.random() * 6) + 1;

			//Display the result
			var diceDOM = document.querySelector('.dice');
			diceDOM.style.display = 'block';
			diceDOM.src = 'dice-' + dice + '.png';

			//Update the round score IF rolled number was not 1
			if(dice !== 1){
				//Add score
				roundScore += dice;
				document.querySelector('#current-' + activePlayer).textContent = roundScore;           
			} else {
				//next player
				nextPlayer();
			}
    	}

	});

	document.querySelector('.btn-hold').addEventListener('click', function() {

		if(gamePlaying) {
				//add current score to global score
			scores[activePlayer] += roundScore;

			//update the UI
		    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

			//check if player won the game 
			if(scores[activePlayer] >= 100){
				document.querySelector('#name-' + activePlayer).textContent = 'winner';
				document.querySelector('.dice').style.display = 'none';
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

			document.querySelector('.dice').style.display = 'none';
	}

	document.querySelector('.btn-new').addEventListener('click', init);

	function init() {
		scores = [0, 0];
		activePlayer = 0;
		roundScore = 0;
		gamePlaying = true;

        document.querySelector('.dice').style.display = 'none';

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



// var roundScore, activePlayer, scores, gamePlaying;

// init();

// // document.querySelector('#score-0').textContent = dice;
// document.querySelector('.dice').style.display = 'none';

// document.querySelector('.btn-roll').addEventListener('click', function() {
// 	if(gamePlaying){
// 	    //Random Number
// 		var dice = Math.floor(Math.random() * 6) + 1;

// 		//Display the result
// 		var diceDOM = document.querySelector('.dice');
// 		diceDOM.style.display = 'block';
// 		diceDOM.src = 'dice-' + dice + '.png';

// 		//update the round score if rolled number was not as 1
// 		if(dice !== 1){
// 			//Add score 
// 			roundScore += dice;
// 			document.querySelector('#current-' + activePlayer).textContent = roundScore;
// 		}else {
// 			// next player
// 			nextPlayer();
// 		}	
// 	}
	

// });

// document.querySelector('.btn-hold').addEventListener('click', function() {
// 	if(gamePlaying){
// 		//Add current score to global score
// 		scores[activePlayer] += roundScore;

// 		//update the UI
// 		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

// 		//check if player won 
// 		if(scores[activePlayer] >= 10){
// 			document.querySelector('#name-' + activePlayer).textContent = 'Winner';
// 			document.querySelector('.dice').style.display = 'none';

// 			document.querySelector('player-' + activePlayer + '-panel').classList.add('winner');
// 			document.querySelector('player-' + activePlayer + '-panel').classList.remove('active');
// 			gamePlaying = false;
// 		}

// 		//next player
// 		nextPlayer();
// 	}
// });

// function nextPlayer(){
//      	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
// 		roundScore = 0;

// 		document.getElementById('current-0').textContent = '0';
// 		document.getElementById('current-1').textContent = '0';

// 		// document.querySelector('.player-0-panel').classList.remove('active');
// 		// document.querySelector('.player-1-panel').classList.add('active');
// 		document.querySelector('.player-0-panel').classList.toggle('active');
// 		document.querySelector('.player-1-panel').classList.toggle('active');

// 		document.querySelector('.dice').style.display = 'none';

// }

// document.querySelector('.btn-new').addEventListener('click', init);

// function init() {
// 	roundScore = 0;
// 	activePlayer = 0;
// 	scores = [0, 0];
// 	gamePlaying = true;

// 	document.getElementById('score-0').textContent = '0';
// 	document.getElementById('score-1').textContent = '0';
// 	document.getElementById('current-0').textContent = '0';
// 	document.getElementById('current-1').textContent = '0';

// 	document.getElementById('name-0').textContent = 'Player 1';
// 	document.getElementById('name-1').textContent = 'Player 2';
// 	document.querySelector('.player-0-panel').classList.remove('winner');
// 	document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
// 	document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');

// }
