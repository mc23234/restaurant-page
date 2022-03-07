export default function contact(){
	const contactTab = document.createElement('div');
	
	const visitInfo = document.createElement('div');
	
	visitInfo.classList.add('visit');
	
	visitInfo.innerHTML = `<h1>Hours & Location</h1>
	<p>916 Amblin St,<br>Black forest, Borduria 034235<br>
	00-0000-0000<br><a href = '#'>info@flavours.com</a></p>
	
	<p>Monday - Thursday<br>5:00 pm - 9:00 pm</p>
	<p>Friday<br>5:00 pm - 10:00 pm</p>
	<p>Saturday<br>11:00 am - 3:00 pm, 5:00 pm - 10:00 pm
	</p>
	<p>Sunday<br>11:00 am - 3:00 pm, 5:00 pm - 9:00 pm</p>
`;
	
	contactTab.appendChild(visitInfo);
	

	
	return contactTab;
}




