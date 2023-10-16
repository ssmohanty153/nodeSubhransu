function Product(n) {
  this.name = n;
}

let d = new Product("Subhransu");

Product.prototype.display = function () {
  console.log("name of the product is " + this.name);
};

/**
 * below comment is not working because d.prototype = undefined
 */
// d.prototype.display = function () {
//   console.log("name of the product is " + this.name);
// };

d.display();
