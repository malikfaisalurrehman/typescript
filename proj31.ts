var usernames = ["admin", "user1", "user2", "user3", "user4"];
if (usernames.length !== 0) {
    console.log ("The array is not empty");
}
usernames.splice(0, usernames.length);
console.log (usernames);
if (usernames.length == 0) {
    console.log ("We need to find some users.");
}