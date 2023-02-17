var current_users = ["shahid", "akram", "faisal", "nasir", "haseeb"];
var new_users = ["shahid", "zahid", "zaid", "nasir", "naseer"];
JSON.stringify (current_users);
JSON.stringify (new_users);
for (var i = 0; i < current_users.length; i++) {
    if (current_users [i] !== new_users [i]) {
        console.log (new_users [i] + " Username is available");
    } else
    {
        console.log (new_users [i] + " Username is taken");
    }
}