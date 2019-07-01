
	var hideResults;
	function hideResults() {
	document.getElementById("gameResults").style.display = "none";
	}
	
	function diceRoll() {
		var diceOne = Math.floor(Math.random() * 6) + 1;
		var diceTwo = Math.floor(Math.random() * 6) + 1;
		return diceOne + diceTwo;
		}
	
	
	function playGame() {
	var startingBet = document.getElementById("startingBetInput").value;
	var rollCount = 0;
	var money = Number(startingBet);
	var maxWinnings = Number(startingBet);
	var rollsAtMax = 0;

		if (startingBet <= 0) {
		alert("Please enter a number greater than zero.");
		}
		
		while (money > 0){
			var rollSum = diceRoll();
			rollCount ++;
			
			if (rollSum == 7) {
			money += 4;
				if (money > maxWinnings) {
				maxWinnings = money;
				rollsAtMax = rollCount;
				}
			} else {
			money -= 1;
			}



	}
		showResults();
	
	function showResults() {
		document.getElementById("gameResults").style.display = "inline";
		document.getElementById("resultsStartingBet").innerHTML = startingBet + ".00";
		document.getElementById("resultsTotalRolls").innerHTML = rollCount;
		document.getElementById("resultsHighestAmount").innerHTML = maxWinnings + ".00";
		document.getElementById("resultsRollsAtHighest").innerHTML = rollsAtMax;
		document.getElementById("playButton").innerHTML = "Play Again";
		return false;
		
		}
		
		
}
	