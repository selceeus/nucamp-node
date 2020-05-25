const rect = require('./rectangle');

function solvedRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    if(l <= 0 || w <= 0 ) {
        console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
    } else {
        console.log(`Area of rectangle: ${rect.area(l,w)} `);
        console.log(`Perimiter of rectangle: ${rect.perimeter(l,w)} `);
    }
}

solvedRect(2,4);
solvedRect(3,5);
solvedRect(0,5);
solvedRect(0,10);