const numbers = [ 1, 15, 18, 23, 27, 32, 43, 47, 52, 57, 67, 72, 78, 83, 87, 92, 97, 99, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 245, 256, 312, 324, 356, 487, 577, 599, 601, 607, 610, 645, 718 ];

const binarySearch = ( array, target ) => {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while ( startIndex <= endIndex ) {
        let middleIndex = Math.floor( ( startIndex + endIndex ) / 2 );

        if ( array[ middleIndex ] === target ) {
            return middleIndex;
        }

        if ( target < array[ middleIndex ] ) {
            endIndex = middleIndex - 1;
        }

        if ( target > array[ middleIndex ] ) {
            startIndex = middleIndex + 1;
        }
    }

    return -1;
}

const searchIndex = binarySearch( numbers, 18 );
if ( searchIndex === -1 ) {
    console.log( 'Not found' );
}
else {
    console.log( 'Found at index', searchIndex );
}