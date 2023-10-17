const player = {
  firstname: "Subhransu sekhar",
  lastname: "Mohanty",
  canBowl: false,
  numberToBat: 3,

  getDetails: function () {
    console.log(this.firstname, this.lastname, "can come at", this.numberToBat);
  },
};

const obj = function (x, y) {
  console.log(x + y);
  console.log(this.getDetails());
};
let x = obj.bind(player, 12, 3);

x();

// let x = player.getDetails;

// //console.log(x()); //undefined
// let y = x.bind(player);
// console.log(y());
