const numbers = [ 45, 1, 18, 2, 78, 23, 54, 12, 42, 9, 5, 99, 67, 35, 26, 49, 11, 24, 36, 27, 17, 6, 72, 33, 44, 76, 39, 51, 22, 43, 25, 29, 38, 50, 14, 8, 10, 19, 30, 55, 37, 16, 13, 61, 70, 68, 41, 15, 3, 21, 47, 34, 48, 46, 7, 4, 28, 20, 69, 31, 77, 71, 73, 74, 75, 32 ];

const bubbleSortAscending = ( array ) => {
    for ( let i = 0; i < array.length; i++ ) {
        for ( let j = 0; j < array.length - 1; j++ ) {
            //Ascending Order
            if ( array[ j ] > array[ j + 1 ] ) {
                [ array[ j ], array[ j + 1 ] ] = [ array[ j + 1 ], array[ j ] ]
            }
        }
    }
    // let swapped;
    // do {
    //     swapped = false;
    //     for ( let i = 0; i < array.length; i++ ) {
    //         if ( array[ i ] > array[ i + 1 ] ) {
    //             const temp = array[ i ];
    //             array[ i ] = array[ i + 1 ];
    //             array[ i + 1 ] = temp;
    //             swapped = true;
    //         }
    //     }
    // } while ( swapped );

    return array;
}

const bubbleSortDescending = ( array ) => {
    for ( let i = 0; i < array.length; i++ ) {
        for ( let j = 0; j < array.length - 1; j++ ) {
            //Ascending Order
            if ( array[ j ] < array[ j + 1 ] ) {
                [ array[ j ], array[ j + 1 ] ] = [ array[ j + 1 ], array[ j ] ]
            }
        }
    }
    // let swapped;
    // do {
    //     swapped = false;
    //     for ( let i = 0; i < array.length; i++ ) {
    //         if ( array[ i ] > array[ i + 1 ] ) {
    //             const temp = array[ i ];
    //             array[ i ] = array[ i + 1 ];
    //             array[ i + 1 ] = temp;
    //             swapped = true;
    //         }
    //     }
    // } while ( swapped );

    return array;
}

const ascendingNumbers = bubbleSortAscending( numbers );
console.log( ascendingNumbers );

const descendingNumbers = bubbleSortDescending( numbers );
console.log( descendingNumbers );