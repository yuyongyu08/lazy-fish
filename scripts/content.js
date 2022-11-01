const img = document.createElement('img');
img.src = chrome.runtime.getURL('images/fish.gif');
img.style.position = 'absolute';
document.body.appendChild(img);
