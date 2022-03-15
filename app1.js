//console.log('hello world');

// const EventEmitter = require('Events');

// const myObj = new EventEmitter();

// myObj.on('addition', () => {
//     console.log('Addition done')
// });

// function add(){
//     const sum = 5 + 6;
//     myObj.emit('addition');
//     return sum;
// }
// add();



// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {
//   foo() {
//     this.emit('test');
//   }
// }
// const myEmitter = new MyEmitter();
// myEmitter.on('test', () => console.log('Yay, it works!'));

// myEmitter.foo();



// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {
//     add(){
//         this.emit('done');
//     }
// }

// const myEmitter = new MyEmitter();
// myEmitter.on('done', () => {
//     console.log('Addition done')
// });

// myEmitter.add();



//const EventEmitter = require('Events');
// class MyEmitter extends EventEmitter {

// }

// const myEmitter = new MyEmitter();

// myEmitter.on('events', () => {
//     console.log('an event occured');
// });
// myEmitter.emit('events');




// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {

// }
// const myEmitter = new MyEmitter();

// myEmitter.on('events', () => {
//     console.log('An event occured');
// });

// myEmitter.emit('events');
// myEmitter.emit('events');



// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {

// };
// const myEmitter = new MyEmitter();

// myEmitter.on('events', () => {
//     console.log('Addition done');
// })

// myEmitter.emit('events');



// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter{

// };

// const myEmitter = new MyEmitter();

// myEmitter.on('events', () => {
//     console.log('It is done');
// })

// myEmitter.emit('events');



// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter{

// };

// const myEmitter = new MyEmitter();

// myEmitter.on('events', () => {
//     console.log('Fantastic');
// })

// myEmitter.emit('events');



// const EventEmitter = require('events');

// const myObj = new EventEmitter();

// myObj.on('multiplication', () => {
//     console.log('multiplication done')
// });

// function multiply(){
//     const multiplication = 5 * 6;
//     myObj.emit('multiplication');
//     return multiplication;
// }

// multiply();



// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {

// }

// const myEmitter = new MyEmitter();

// myEmitter.on('event', (number1, number2) => {
//     console.log(`An event occured! Sum is: ${parseInt(number1) + parseInt(number2)}`)
//  });
// myEmitter.emit('event', 5, 6);



//passing an array
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();

myEmitter.on('event', ([a , b]) => {
    console.log(`An event occured! Sum is: ${parseInt(a) + parseInt(b)}`)
 });

 myEmitter.emit('event', [5, 6]);