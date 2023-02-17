var guest = ["Asim", "Umar", "Nasir"];
/*
console.log ("Hi dear " + guest [0] + " I would like to have the pleasure of inviting you to dinner at my home tonight, please.");
console.log ("Hi dear " + guest [1] + " I would like to have the pleasure of inviting you to dinner at my home tonight, please.");
console.log ("Hi dear " + guest [2] + " I would like to have the pleasure of inviting you to dinner at my home tonight, please.");
console.log ("Unfortunately " + guest [0] + " and " + guest [2] + " would not be able to join us at dinner");
guest [0] = "Shazib";
guest [2] = "Haroon";
console.log ("Hi dear " + guest [0] + " I would like to have the pleasure of inviting you to dinner at my home tonight, please.");
console.log ("Hi dear " + guest [1] + " I would like to have the pleasure of inviting you to dinner at my home tonight, please.");
console.log ("Hi dear " + guest [2] + " I would like to have the pleasure of inviting you to dinner at my home tonight, please.");
console.log ("Friends, I found a bigger dinner table");
*/
guest.unshift ("Shahid");
guest.splice (1, 0, "Akram");
guest.push("Haroon");
/*
console.log ("Hi dear " + guest [0] + " I would like to have the pleasure of inviting you to dinner at my home tonight, please.");
console.log ("Hi dear " + guest [1] + " I would like to have the pleasure of inviting you to dinner at my home tonight, please.");
console.log ("Hi dear " + guest [2] + " I would like to have the pleasure of inviting you to dinner at my home tonight, please.");
console.log ("Hi dear " + guest [3] + " I would like to have the pleasure of inviting you to dinner at my home tonight, please.");
console.log ("Hi dear " + guest [4] + " I would like to have the pleasure of inviting you to dinner at my home tonight, please.");
console.log ("Hi dear " + guest [5] + " I would like to have the pleasure of inviting you to dinner at my home tonight, please.");
*/
console.log ("Friends, my new dinner table wont arrive in time so I can invite only two people on dinner.");
console.log (guest);
console.log (guest [0] + " Sorry, you are not invited today.");
guest.splice (0, 1);
console.log (guest);
console.log (guest [1] + " Sorry, you are not invited today.");
guest.splice (1, 1);
console.log (guest);
console.log (guest [2] + " Sorry, you are not invited today.");
guest.splice (2, 1);
console.log (guest);
console.log (guest [0] + " Sorry, you are not invited today.");
guest.splice (0, 1);
console.log (guest);
console.log (guest [0] + " You are invited today.");
console.log (guest [1] + " You are invited today.");
guest.splice (0, 2);
console.log ("My list is now empty");
console.log (guest);



