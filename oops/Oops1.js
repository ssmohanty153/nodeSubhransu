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
  return this;
}

let p1 = new product("poco", "16500");

console.log(p1); //product { name: 'poco', price: '16500' }
