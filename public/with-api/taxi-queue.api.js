document.addEventListener('alpine:init', () => {

    Alpine.data('TaxiQueue', () => {

        return {
            version: 'api-1.0',
            queueLength: 0,
            addOnTaxiQueue : 0,
			addToJoinQueue :0,
			removeToLeaveQueue : 0,
			numberOfPeople : 0,
			departTaxi : false,

            init() {
                axios
                    .get('/api/passenger/queue')
                    .then(result => {
                        // an example API call
                        this.queueLength = result.data.queueCount
                    });
            },
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
                if (this.addOnTaxiQueue>0 && this.addToJoinQueue>=12 ){
                    this.addOnTaxiQueue -= 1
                    this.addToJoinQueue -= 12
                } 

            },

            clearQueue () {
                this.addToJoinQueue = 0;
                this.addOnTaxiQueue = 0;

            }
        }


    });

});

