const div = document.createElement('div');
div.style.width = '100%';
div.style.height = '100%';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.textAlign = 'center';

const snippet = `<image width="620px" height="620px" style="margin-left: 50%;translate: -50%;" src="${chrome.runtime.getURL('images/fish.gif')}"/><h2 style="margin-top: -350px">摸鱼~</h2>`;
div.innerHTML = snippet;
document.body.appendChild(div);
