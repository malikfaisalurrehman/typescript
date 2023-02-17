var usernames = ["admin", "user1", "user2", "user3", "user4"];
for (let i=0; i < usernames.length; i++) {
    if (usernames [i] == "admin") {
    console.log ("Hello dear " + usernames [i] + " Would you like to see a status report?");
} 
else {
    console.log ("Hello dear " + usernames [i]);
}
}