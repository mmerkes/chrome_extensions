var regex = [
  [ 'the government|government|federal', 'sugar daddy', 'gi'],
  [ 'Barack Obama|Obama', 'He Who Shall Not Be Named', 'gi'],
  [ 'health care|healthcare', 'Obamacare', 'gi'],
  [ 'Hillary Clinton', 'Barney the Purple Dinosaur', 'gi'],
  [ 'Clinton', 'the Purple Dinosaur', 'gi'],
  [ 'guns', 'nurf guns', 'gi'],
  [ 'children', 'oompa loompas', 'gi'],
  [ 'child|student', 'oompa loompa', 'gi'],
  [ 'people', 'space cowboys', 'gi'],
  [ 'taxes', 'your money', 'gi'],
  [ 'tax', 'steal', 'gi'],
  [ 'Democrat', 'hypocrit', 'gi'],
  [ 'legislation', 'selling your soul', 'gi'],
  [ 'security', 'opening the door to terrorists', 'gi'],
  [ 'Afghanistan|Iraq', 'Neverland', 'gi'],
  [ 'Syria', 'Mars', 'gi'],
  [ 'veterans|military personnel', 'those I ignore', 'gi'],
  [ 'job', 'roundabout', 'gi'],
  [ 'Nancy Pelosi', 'Elmo', 'gi'],
  [ 'marriage', 'casual relationship', 'gi'],
  [ 'liberal', 'extremist', 'gi'],
  [ 'Al Gore|Gore', 'the guy who thinks he invented the internet', 'gi'],
  [ 'Rahm Emanuel', "Obama's left cheek", 'gi'],
  [ 'Harry Reid|Reid', 'the Old Fart', 'g'],
  [ 'Michelle Obama', 'the wife who shall not be named', 'g'],
  [ 'John Kerry|Kerry', 'Elmo', 'gi'],
  [ 'Eric Holder|Holder', 'the Monopoly Guy', 'g'],
  [ 'Joe Biden|Biden', 'Big Bird', 'gi'],
  [ 'Michael Bloomberg|Bloomberg', 'Dr. Soda', 'gi'],
  [ 'Jon Stewart', 'the clown', 'gi'],
  [ 'NSA', "Obama's henchman", 'g'],
  [ 'Obamacare|Affordable Healthcare Act', 'O-Skama-Care', 'gi'],
  [ 'hero|patriot|patriotism', 'the unknown', 'gi'],
  [ 'leadership', 'incompetence', 'gi'],
  [ 'economy', 'trash heap', 'gi'],
  [ 'business', 'the enemy', 'gi']
]

var text = document.body.innerHTML;

for( var r = 0; r < regex.length; r++ ) {
  var rgx = new RegExp( regex[r][0], regex[r][2]);
  text = text.replace( rgx, regex[r][1]);
}

document.body.innerHTML = text;
