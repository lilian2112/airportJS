describe("Airport", function() {
  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    plane2 = new Plane();
  });

  it ("has the plane after it has landed", function (){
    airport.land(plane);
    expect(airport._planes).toContain(plane);
  });

  it ("raises an error when an already landed plane tries to land", function (){
    airport.land(plane);
    expect(function() {airport.land(plane)}).toThrow("Plane already landed");
  });
  it ("raises an error when airport is full and plane tries to land", function (){
    airport.land(plane);
    expect(function() {airport.land(plane2)}).toThrow("Airport is full");
  });
  it ("no longer has plane after taken off", function (){
    airport.takeOff(plane);
    expect(airport._planes).not.toContain(plane);
  });

});
