var magicians = ["John", "Steve", "Robert", "Richard"];
function make_great () {
    magicians [0] = "Great John"
    magicians [1] = "Great Steve"
    magicians [2] = "Great Robert"
    magicians [3] = "Great Richard"
}
function show_magicians () {
    console.log ("1st Magician " + magicians [0]);
    console.log ("2nd Magician " + magicians [1]);
    console.log ("3rd Magician " + magicians [2]);
    console.log ("4th Magician " + magicians [3]);
}
make_great();
show_magicians();