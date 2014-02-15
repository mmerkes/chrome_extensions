var regex = [
  [ 'patriotism', 'fraudalance'],
  [ 'hero|patriot', 'fraud'],
  [ 'government|federal', 'uncle Bob'],
  [ "Rush Limbaugh|Bill O'Reilly|Sean Hannity|Hannity|O'Reilly|Limbaugh", 'the Great Satan'],
  [ 'guns', 'nuclear weapons'],
  [ 'tax', 'helping poor people'],
  [ 'security', 'arresting Arabs'],
  [ 'bare arms', 'shoot people'],
  [ 'education', 'helping rich people'],
  [ 'environment', 'wompadoodle'],
  [ 'healthcare', 'smoking crack'],
  [ 'veteran', 'unicorn'],
  [ 'technology|science', 'black magic'],
  [ 'God', 'myself'],
  [ 'Palin|Bachmann', 'the Idiot'],
  [ 'McCain', 'the Old Fart'],
  [ 'John Boehner|Boehner', 'Captain Crunch'],
  [ 'Reagan', 'McDonald'],
  [ 'Scalia', 'Mussolini'],
  [ 'fiscal hawk', 'cheapskate'],
  [ 'tea party', 'knitting club'],
  [ 'business', 'my homies'],
  [ 'main street', 'red light district'],
  [ 'leadership', 'bumbling ineptitude'],
  [ 'earmark', 'pantyhose'],
  [ 'pension', 'teddy bears'],
  [ 'waste', 'dookie'],
  [ 'oil|petroleum|natural gas', 'milk'],
  [ 'Fox News', 'Citizen Kane'],
  [ 'conservative', 'flambouyant'],
  [ 'conservation', 'constapation'],
  [ 'Republican Party|', 'Pastafarians'],
  [ 'cuts', 'clam chowder'],
  [ 'Paul Ryan|Rand Paul', 'Liza Minnelli']
]

var text = document.body.innerHTML;

for( var r = 0; r < regex.length; r++ ) {
  var rgx = new RegExp( regex[r][0], 'gi');
  text = text.replace( rgx, regex[r][1]);
}

document.body.innerHTML = text;
