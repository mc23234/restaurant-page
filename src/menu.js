import ramen from './menu/ramen.jpg';
import friedrice from './menu/friedrice.jpg';
import taco from './menu/taco.jpg';
import pasta from './menu/penne.jpg';
import pizza from './menu/pizza.jpg';
import onion from './menu/crunchy.jpg';
import mex from './menu/mex.jpg';
import nachos from './menu/nachos.jpg';
import nem from './menu/nem.jpg';
import waffle from './menu/waffle.jpg';
import sandwich from './menu/sandwich.jpg';

export default function menu(){
	const menuTab = document.createElement('div');
	const menuHeading = document.createElement('div');
	menuHeading.textContent = 'Our Menu';
	menuHeading.classList.add('menu-heading');
	menuTab.appendChild(menuHeading);
	
	const menuCards = document.createElement('div');
	menuCards.classList.add('menu-cards');
	menuTab.appendChild(menuCards);
	
	const card1 = document.createElement('div');
	menuCards.append(card1);
	card1.classList.add('cards');
	card1.innerHTML = `<div><h2>Ramen</h2> <br>A Japanese noodle soup dish<br><br>7$<br></div>`;
	
	const img1 = new Image();
	img1.src = ramen;
	img1.classList.add('menu-image');
	card1.appendChild(img1);
	
	const card2 = document.createElement('div');
	menuCards.append(card2);
	card2.classList.add('cards');
	card2.innerHTML = `<div><h2>Fried Rice</h2> <br>A chinese dish<br><br>8$<br></div>`;
	
	const img2 = new Image();
	img2.src = friedrice;
	img2.classList.add('menu-image');
	card2.appendChild(img2);
	
	const card3 = document.createElement('div');
	menuCards.append(card3);
	card3.classList.add('cards');
	card3.innerHTML = `<div><h2>Tacos</h2> <br>A taco is a traditional Mexican dish<br><br>5$<br></div>`;
	
	const img3 = new Image();
	img3.src = taco;
	img3.classList.add('menu-image');
	card3.appendChild(img3);
	
	
	const card4 = document.createElement('div');
	menuCards.append(card4);
	card4.classList.add('cards');
	card4.innerHTML = `<div><h2>Pasta</h2> <br>Pasta is an Italian food<br><br>8$<br></div>`;
	
	const img4 = new Image();
	img4.src = pasta;
	img4.classList.add('menu-image');
	card4.appendChild(img4);

	const card5 = document.createElement('div');
	menuCards.append(card5);
	card5.classList.add('cards');
	card5.innerHTML = `<div><h2>Pizza</h2> <br>A dish of Italian origin<br><br>10$<br></div>`;
	
	const img5 = new Image();
	img5.src = pizza;
	img5.classList.add('menu-image');
	card5.appendChild(img5);
	
	const card6 = document.createElement('div');
	menuCards.append(card6);
	card6.classList.add('cards');
	card6.innerHTML = `<div><h2>Onion Rings</h2> <br>An onion ring, also called a French fried onion ring, is a form of appetizer or side dish in British and American cuisine<br><br>8$<br></div>`;
	
	const img6 = new Image();
	img6.src = onion;
	img6.classList.add('menu-image');
	card6.appendChild(img6);

	const card7 = document.createElement('div');
	menuCards.append(card7);
	card7.classList.add('cards');
	card7.innerHTML = `<div><h2>Mexican Avocado Salad</h2><br><br>6$<br></div>`;
	
	const img7 = new Image();
	img7.src = mex;
	img7.classList.add('menu-image');
	card7.appendChild(img7);

	const card8 = document.createElement('div');
	menuCards.append(card8);
	card8.classList.add('cards');
	card8.innerHTML = `<div><h2>Nachos</h2> <br>A dish from northern Mexico<br><br>12$<br></div>`;
	
	const img8 = new Image();
	img8.src = nachos;
	img8.classList.add('menu-image');
	card8.appendChild(img8);

	const card9 = document.createElement('div');
	menuCards.append(card9);
	card9.classList.add('cards');
	card9.innerHTML = `<div><h2>Nem Rolls</h2> <br>A Vietnamese dish<br><br>9$<br></div>`;
	
	const img9 = new Image();
	img9.src = nem;
	img9.classList.add('menu-image');
	card9.appendChild(img9);
	
	const card10 = document.createElement('div');
	menuCards.append(card10);
	card10.classList.add('cards');
	card10.innerHTML = `<div><h2>Sandwich</h2> <br>Good old sandwiches<br><br>5$<br></div>`;
	
	const img10 = new Image();
	img10.src = sandwich;
	img10.classList.add('menu-image');
	card10.appendChild(img10);
	
	const card11 = document.createElement('div');
	menuCards.append(card11);
	card11.classList.add('cards');
	card11.innerHTML = `<div><h2>Waffle</h2> <br>A French recipe<br><br>11$<br></div>`;
	
	const img11 = new Image();
	img11.src = waffle;
	img11.classList.add('menu-image');
	card11.appendChild(img11);
	

	return menuTab;
}




