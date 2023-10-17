let arr = [1, 2, 3];

console.log(typeof arr);

let obj = { x: 10, y: 20 };

Object.freeze(obj); //no new property will added

obj.x = 20;

console.log(obj); //{ x: 10, y: 20 }

let obj1 = { x: 10, y: 20 };

Object.seal(obj1); // we can add new prooperty but we can update old one

obj1.x = 30;

console.log(obj1);
