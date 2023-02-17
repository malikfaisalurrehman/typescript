function make_sandwich(...items) {
  console.log("Making a sandwich with the following items:");
  for (let i = 0; i < items.length; i++) {
    console.log("- " + items[i]);
  }
  console.log("Enjoy your sandwich!");
}

// Example function calls
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "mayo");
make_sandwich("peanut butter", "jelly", "bread", "banana");