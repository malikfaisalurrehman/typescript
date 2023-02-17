function make_album(artist_name, album_title, num_tracks) {
  var album = {
    artist: artist_name,
    title: album_title
  };
  if (num_tracks) {
    album.num_tracks = num_tracks;
  }
  return album;
}

// Example function calls
var album1 = make_album('The Beatles', 'Abbey Road');
console.log(album1);

var album2 = make_album('Led Zeppelin', 'IV', 8);
console.log(album2);

var album3 = make_album('Pink Floyd', 'The Wall', 26);
console.log(album3);