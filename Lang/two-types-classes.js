function Man() {
  this.name = "John";
  this.changeName = function(newName) {
    this.name = newName;
  }
}

function Dude() {
  return {
    name: "John",
    changeName: function(newName) {
      console.log("Inside changeName:" + name);
      name = newName;
    }
  };
}


var p1 = {
  name: "John",
  changeName: function(newName) {
    console.log("Inside changeName: " + name);
    name = newName;
  }
};

console.log(p1.name);
p1.changeName("Gary");
console.log(p1.name);
