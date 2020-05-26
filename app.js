const rect = require('./rectangle');

function solvedRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {
        if(err) {
            console.log('ERROR:', err.message);
        }
        else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimiter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the call to rect');
}

solvedRect(2,4);
solvedRect(3,5);
solvedRect(0,5);
solvedRect(0,10);