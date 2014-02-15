var tags = ['p', 'h1', 'h2', 'h3', 'h4'];

var regex = [
  [ 'patriotism', 'fraudalance'],
  [ 'hero|patriot', 'fraud'],
  [ 'government', 'my homies'],
  [ "Rush Limbaugh|Bill O'Reilly|Sean Hannity", 'the Great Satan'],
  [ 'guns', 'nuclear weapons'],
  [ 'tax', 'sex'],
  [ 'security', 'killing Arabs'],
  [ 'education', 'helping rich people'],
  [ 'environment', 'toad prince'],
  [ 'healthcare', 'smoking crack'],
  [ 'veteran', 'unicorn'],
  [ 'technology|science', 'black magic'],
  [ 'God', 'myself']
]

for( var h = 0; h < tags.length; h++) {
  var elements = document.querySelectorAll(tags[h]);
  console.log(tags[h]);
  for( var i = 0; i < elements.length; i++ ) {
    for( var r = 0; r < regex.length; r++ ) {
      changeText( elements[i], regex[r][0], regex[r][1]);
    }
  }
}

function changeText( element, oldWord, newWord ) {
  var text = element.innerText,
      rgx = new RegExp(oldWord, 'gi');

  if( !text )
    return;
  text = text.replace(rgx, newWord);
  element.innerText = text;
}
