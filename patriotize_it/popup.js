function click( event ) { 
  if( event.target.id === 'conservatize' ) {
    chrome.tabs.executeScript(null, { file: "conservatize.js"});
    window.close();
  } else if( event.target.id === 'liberalize' ) {
    chrome.tabs.executeScript(null, { file: "liberalize.js"});
    window.close();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', click);
  }
});

