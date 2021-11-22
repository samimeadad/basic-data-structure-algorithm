const numbers = [ 45, 1, 18, 2, 78, 23, 54, 12, 42, 9, 5, 99, 67, 35, 26, 49, 11, 24, 36, 27, 17, 6, 72, 33, 44, 76, 39, 51, 22, 43, 25, 29, 38, 50, 14, 8, 10, 19, 30, 55, 37, 16, 13, 61, 70, 68, 41, 15, 3, 21, 47, 34, 48, 46, 7, 4, 28, 20, 69, 31, 77, 71, 73, 74, 75, 32, 0, -5 ];

//Selection Sort
const selectionSort = ( array ) => {
    for ( let i = 0; i < array.length; i++ ) {
        let minIndex = i;
        for ( let j = i + 1; j < array.length; j++ ) {
            if ( array[ j ] < array[ minIndex ] ) {
                minIndex = j; //update minIndex
            }
        }
        if ( minIndex !== i ) {
            [ array[ i ], array[ minIndex ] ] = [ array[ minIndex ], array[ i ] ];
        }
    }
    return array;
}

const sortedNumbers = selectionSort( numbers );
console.log( sortedNumbers );