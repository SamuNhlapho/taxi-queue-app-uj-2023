document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'no-api-1.0',
			addOnTaxiQueue : 0,
			addToJoinQueue :0,
			removeToLeaveQueue : 0,
			numberOfPeople : 0,
			departTaxi : false,
			Message : '',
			


	joinQueue() {
		this.addToJoinQueue += 1;

	},
	leaveQueue() {
		if(this.addToJoinQueue>0){
		this.addToJoinQueue -= 1
		}

	},

	joinTaxiQueue() {
		this.addOnTaxiQueue += 1
	},

	queueLength() {
		

	},

	taxiQueueLength() {

	},

	taxiDepart() {

		// if (this.addToJoinQueue <12) {
		// 	this.Message = 'Not enough passengers!'
		// 	setTimeout(() => {
		// 		this.Message = '';
		// 	}, 3000);
		// }
		// else if (this.addOnTaxiQueue <0) {
		// 	this.Message = 'No Taxis avaliable!'
		// 	setTimeout(() => {
		// 		this.Message = '';
		// 	}, 3000);
		// }
	    if (this.addOnTaxiQueue>0 && this.addToJoinQueue>=12 ){
			this.addOnTaxiQueue -= 1
			this.addToJoinQueue -= 12
		} 
		
	 }




	}
})
});


