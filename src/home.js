import noodle from './home/noodles.jpg';
import burger from './home/burger.jpg';
import pizza from './home/pizza.jpg';
import veg from './home/veg.jpg';
import breakfast from './home/breakfast.jpg';
import ice from './home/ice.jpg';

export default function home(){
	const homeTab = document.createElement('div');
	
	const description1 = document.createElement('div');
	description1.classList.add('description');
	description1.innerHTML = `<h2>A modern approach to multi cuisine</h2>
	
	<p>The Flavours is a multi cuisine restaurant with an emphasis on quality ingredients and precision cooking. Treating quality ingredients with respect and allowing them to shine in their best iterations.</p>`;
	homeTab.appendChild(description1);

	const imgContainer = document.createElement('div');
	homeTab.appendChild(imgContainer);
	imgContainer.classList.add('img-container');
	

	const img1 = new Image();
	img1.classList.add('image');
	img1.src = ice;
	imgContainer.appendChild(img1);
	
	const img2 = document.createElement('img');
	img2.classList.add('image');
	img2.src = burger;
	imgContainer.appendChild(img2);
	
	
	const img3 = document.createElement('img');
	img3.classList.add('image');
	img3.src = noodle;
	imgContainer.appendChild(img3);
	
	
	const img4 = document.createElement('img');
	img4.classList.add('image');
	img4.classList.add('fade');
	img4.src = veg;
	imgContainer.appendChild(img4);
	
	const img5 = document.createElement('img');
	img5.classList.add('image');
	img5.src = pizza;
	imgContainer.appendChild(img5);
	
	const img6 = document.createElement('img');
	img6.classList.add('image');
	img6.src = breakfast;
	imgContainer.appendChild(img6);
	
	const description2 = document.createElement('div');
	description2.classList.add('description');
	description2.classList.add('info');
	description2.innerHTML = ` <p>Its our skill and the reliance on hard work done by hand, that our meals are simple, prepared quickly, and always delicious.</p>`;
	homeTab.appendChild(description2);


	return homeTab;
};

