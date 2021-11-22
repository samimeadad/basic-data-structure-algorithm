//FIFO: First In First Out

class Queue {
    constructor () {
        this.queue = [];
    }

    enqueue ( element ) {
        this.queue.push( element );
    }
}

const invitation = new Queue();

invitation.enqueue( 'Sami' );
invitation.enqueue( 'Farmee' );
invitation.enqueue( 'Aarishamma' );
invitation.enqueue( 'Aarashabba' );