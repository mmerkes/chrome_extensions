var regex = [
  [ 'hero|patriot', 'pretty pony', 'gi'],
  [ 'patriotism', 'equestrianism', 'gi'],
  [ 'the government|government|federal', 'uncle Bob', 'gi'],
  [ "Rush Limbaugh|Bill O'Reilly|Sean Hannity|Hannity|O'Reilly|Limbaugh", 'the Great Satan', 'g'],
  [ 'guns', 'nuclear weapons', 'gi'],
  [ 'tax', 'helping poor people', 'gi'],
  [ 'security', 'program to arrest Arabs', 'gi'],
  [ 'bear arms', 'shoot people', 'gi'],
  [ 'education', 'assistance to rich people', 'gi'],
  [ 'environment', 'wompadoodle'], 'gi',
  [ 'healthcare|health care', 'standing on your head', 'gi'],
  [ 'veteran', 'unicorn', 'gi'],
  [ 'military personnel', 'unicorns', 'gi'],
  [ 'technology|science', 'black magic', 'gi'],
  [ 'God', 'myself', 'gi'],
  [ 'Palin|Bachmann', 'the Idiot', 'gi'],
  [ 'McCain', 'the Old Fart', 'gi'],
  [ 'John Boehner|Boehner', 'Captain Crunch', 'gi'],
  [ 'Reagan', 'McDonald', 'gi'],
  [ 'Scalia', 'Mussolini', 'gi'],
  [ 'fiscal hawk', 'cheapskate', 'gi'],
  [ 'tea party', 'knitting club', 'gi'],
  [ 'business', 'my homies', 'gi'],
  [ 'main street', 'red light district', 'gi'],
  [ 'leadership', 'bumbling ineptitude', 'gi'],
  [ 'earmark', 'pantyhose', 'gi'],
  [ 'pension', 'teddy bear', 'gi'],
  [ 'waste', 'dookie', 'gi'],
  [ 'oil|petroleum|natural gas', 'milk', 'gi'],
  [ 'Fox News|Fox', 'fake news', 'g'],
  [ 'conservative', 'flambouyant', 'gi'],
  [ 'conservation', 'constapation', 'gi'],
  [ 'Republican Party|Republican', 'Chihuahuas', 'gi'],
  [ 'cuts', 'clam chowder', 'gi'],
  [ 'Paul Ryan|Rand Paul', 'Liza Minnelli', 'gi'],
  [ 'children', 'oompa loompas', 'gi'],
  [ 'child|student', 'oompa loompa', 'gi'],
  [ 'Pro-Life', 'Pro-Alien', 'gi'],
  [ 'abstinence', 'dieting', 'gi'],
  [ 'birth control', 'Tylenol', 'gi'],
  [ 'economy', 'Great Salt Lake', 'gi'],
  [ 'terrorism', 'vegetarianism', 'gi'],
  [ 'people', 'aliens', 'gi'],
  [ 'born', 'converted', 'gi'],
  [ 'Afghanistan|Iraq', "Bush's war", 'gi'],
  [ 'conservative', 'extremist', 'gi']
];

var text = document.body.innerHTML;

for( var r = 0; r < regex.length; r++ ) {
  var rgx = new RegExp( regex[r][0], regex[r][2]);
  text = text.replace( rgx, regex[r][1]);
}

document.body.innerHTML = text;
