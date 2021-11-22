//FIFO: First In First Out

class Queue {
    constructor () {
        this.queue = [];
    }

    enqueue ( element ) {
        this.queue.push( element );
    }

    dequeue () {
        this.queue.shift();
    }
}

const invitation = new Queue();

console.log( 'Adding', invitation.queue );
invitation.enqueue( 'Sami' );
console.log( 'Adding', invitation.queue );
invitation.enqueue( 'Farmee' );
console.log( 'Adding', invitation.queue );
invitation.enqueue( 'Aarishamma' );
console.log( 'Adding', invitation.queue );
invitation.enqueue( 'Aarashabba' );
console.log( 'Adding', invitation.queue );

console.log( invitation.queue );

invitation.dequeue();
console.log( 'Removing', invitation.queue );
invitation.dequeue();
console.log( 'Removing', invitation.queue );
invitation.dequeue();
console.log( 'Removing', invitation.queue );
invitation.dequeue();
console.log( 'Removing', invitation.queue );
invitation.dequeue();
console.log( 'Removing', invitation.queue );