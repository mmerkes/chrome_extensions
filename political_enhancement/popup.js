function click( event ) { 
  if( event.target.id === 'conserve' ) {
    chrome.tabs.executeScript(null, { file: "conserve.js"});
    window.close();
  } else if( event.target.id === 'liberate' ) {
    chrome.tabs.executeScript(null, { file: "liberate.js"});
    window.close();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', click);
  }
});

