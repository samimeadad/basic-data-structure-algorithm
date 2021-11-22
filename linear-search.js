const numbers = [ 45, 1, 18, 2, 78, 23, 54, 12, 42, 9, 5, 99, 67, 35, 26, 49, 11, 24, 36, 27, 17, 6, 72, 33, 44, 76, 39, 51, 22, 43, 25, 29, 38, 50, 14, 8, 10, 19, 30, 55, 37, 16, 13, 61, 70, 68, 41, 15, 3, 21, 47, 34, 48, 46, 7, 4, 28, 20, 69, 31, 77, 71, 73, 74, 75, 32 ];

const linearSearch = ( array, target ) => {
    for ( let i = 0; i < array.length; i++ ) {
        const element = array[ i ];
        if ( element === target ) {
            return i;
        }
    }
    return -1;
}

const searchIndex = linearSearch( numbers, 58 );
if ( searchIndex === -1 ) {
    console.log( 'Not found' );
}
else {
    console.log( 'Found at index', searchIndex );
}