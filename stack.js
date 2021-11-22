//LIFO: Last In First Out

class Stack {
    constructor () {
        this.stack = [];
    }

    add ( element ) {
        this.stack.push( element );
    }

    remove () {
        return this.stack.pop();
    }
}

const plates = new Stack();

console.log( 'Adding', plates.stack );
plates.add( 'Sami' );
console.log( 'Adding', plates.stack );
plates.add( 'Farmee' );
console.log( 'Adding', plates.stack );
plates.add( 'Aarishamma' );
console.log( 'Adding', plates.stack );
plates.add( 'Aarashabba' );
console.log( 'Adding', plates.stack );

plates.remove();
console.log( 'Removing', plates.stack );
plates.remove();
console.log( 'Removing', plates.stack );
plates.remove();
console.log( 'Removing', plates.stack );
plates.remove();
console.log( 'Removing', plates.stack );
plates.remove();
console.log( 'Removing', plates.stack );