function Airport(){
  this._planes = [];
}

Airport.prototype.land = function (plane){
  if (plane.isLanded === true) {
    throw ("Plane already landed");
  } else if (this._planes.length >= 1) {
    throw ("Airport is full");
  } else {
    plane.land();
    this._planes.push(plane)
  }
}
Airport.prototype.takeOff = function () {
  this._planes.pop
}
