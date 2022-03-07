import homeTab from './home.js';
import menuTab from './menu.js';
import contactTab from './contact.js';
import './style.css';

const content = document.getElementById('content');

const heading = document.createElement('div');
heading.innerHTML = "Flavours";
heading.classList.add('heading');

const tabItems = document.createElement('div');
tabItems.classList.add('tab-items');

const subContent = document.createElement('div');

content.appendChild(tabItems);
content.appendChild(subContent);
subContent.appendChild(homeTab());

const homeTabBtn = document.createElement('div');
const menuTabBtn = document.createElement('div');
const contactTabBtn = document.createElement('div');


homeTabBtn.classList.add('tabs');
menuTabBtn.classList.add('tabs');
contactTabBtn.classList.add('tabs');

homeTabBtn.textContent = 'home';
menuTabBtn.textContent = 'menu';
contactTabBtn.textContent = 'contact';

tabItems.appendChild(heading);
tabItems.appendChild(homeTabBtn);
tabItems.appendChild(menuTabBtn);
tabItems.appendChild(contactTabBtn);

homeTabBtn.addEventListener('click',() => {showContent(homeTab)});
menuTabBtn.addEventListener('click',() => {showContent(menuTab)});
contactTabBtn.addEventListener('click',() => {showContent(contactTab)});

function showContent(tab){
	subContent.innerHTML = '';
	subContent.appendChild(tab());
}

const footer = document.createElement('div');
footer.classList.add('footer');
footer.innerHTML = '&copy Copyright osSidd github 2022';
content.appendChild(footer);
