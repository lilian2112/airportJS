describe("Airport", function() {
  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it ("has the plane after it has landed", function (){
    airport.land(plane)
    expect(airport._planes).toContain(plane)
  });
});
