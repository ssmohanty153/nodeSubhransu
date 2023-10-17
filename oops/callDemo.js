const player = {
  firstname: "Subhransu sekhar",
  lastname: "Mohanty",
  canBowl: false,
  numberToBat: 3,

  getDetails: function () {
    console.log(this.firstname, this.lastname, "can come at", this.numberToBat);
    return "subhransu";
  },
};

const obj = function (x, y) {
  console.log(x + y);
  console.log(this.getDetails());
};

obj.call(player, 2, 45);
