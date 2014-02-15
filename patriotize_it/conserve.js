var regex = [
  [ 'patriotism', 'fraudalance'],
  [ 'hero|patriot', 'fraud'],
  [ 'government', 'sugar daddy'],
  [ "Rush Limbaugh|Bill O'Reilly|Sean Hannity", 'the Great Satan'],
  [ 'guns', 'nuclear weapons'],
  [ 'tax', 'sex'],
  [ 'security', 'killing Arabs'],
  [ 'education', 'helping rich people'],
  [ 'environment', 'toad prince'],
  [ 'healthcare', 'smoking crack'],
  [ 'veteran', 'unicorn'],
  [ 'technology|science', 'black magic'],
  [ 'God', 'myself'],
  [ 'Palin|Bachman', 'the Idiot'],
  [ 'McCain', 'the Old Fart'],
  [ 'John Boehner|Boehner', 'Captain Crunch'],
  [ 'Reagan', 'McDonald'],
  [ 'Scalia', '']
]

var text = document.body.innerHTML;

for( var r = 0; r < regex.length; r++ ) {
  var rgx = new RegExp( regex[r][0], 'gi');
  text = text.replace( rgx, regex[r][1]);
}

document.body.innerHTML = text;
