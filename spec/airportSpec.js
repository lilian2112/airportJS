describe("Airport", function() {
  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it ("has the plane after it has landed", function (){
    airport.land(plane);
    expect(airport._planes).toContain(plane);
  });

  it ("raises an error when an already landed plane tries to land", function (){
    airport.land(plane);
    // spyOn(plane, 'land');
    expect(function() {airport.land(plane)}).toThrow("Plane already landed");
  });

});
