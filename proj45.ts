function make_car(manufacturer, model, ...args) {
  var car = {
    manufacturer: manufacturer,
    model: model
  };
  for (let i = 0; i < args.length; i += 2) {
    car[args[i]] = args[i+1];
  }
  return car;
}

// Example function call
var car1 = make_car("Honda", "Civic", "year", 2022, "color", "blue");
console.log(car1);