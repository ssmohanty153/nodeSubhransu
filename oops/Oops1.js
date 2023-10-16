class Product {
  discount = 10; //Product { discount: 10, name: 'Iphone15', price: '51000' }
  constructor(p, n) {
    // This is constructor function to create an object
    //when we create a function this is first function will execute

    this.name = n;
    this.price = p;
  }

  // Don't write the function
  display() {
    console.log("display");
  }

  buyProduct() {
    console.log("buYproduct");

    console.log(this.name, this.price, this.discount);
  }
}

let iphone = new Product("51000", "Iphone15");

console.log(iphone);
//Product { name: 'Iphone15', price: '51000' }

iphone.display();

function product(n, p) {
  this.name = n;
  this.price = p;
  return this; // you not return anythings with new key words it will return name and price
}

let p1 = new product("poco", "16500");

console.log(p1); //product { name: 'poco', price: '16500' }

function product2(n, p) {
  this.name = n;
  this.price = p;
  //return this; // you not return anythings with new key words it will return name and price

  this.display = function () {
    console.log(this.name, this.price);
  };
}

let p2 = product2("poco", "16500");

console.log(p2); //undefined

// p2.display(); //error with using new you can access to p2

const obj1 = {
  name: "Subhransu",
  display: function () {
    console.log(this); //{ name: 'Subhransu', display: [Function: display] }
  },
};

const obj2 = {
  name: "Mohanty",
  display: () => {
    console.log(this); //{}
  },
};

obj1.display();

obj2.display();
