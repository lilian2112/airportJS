function Airport(){
  this._planes = [];
}

Airport.prototype.land = function (plane){
  if (plane.isLanded === true) {
    console.log(plane.isLanded)
    throw ("Plane already landed");
  } else {
    plane.land();
    this._planes.push(plane)
  }
}
