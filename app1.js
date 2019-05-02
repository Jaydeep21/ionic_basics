const courseName = document.querySelector('#course-name');
const courseRating = document.querySelector('#course-rating');
const displayData = document.querySelector('#displayList');
const addBtn = document.querySelector('#btnAdd');
const alertMessage = document.querySelector('ion-alert-controller');

const clear = () =>{
	courseName.value = '';
	courseRating.value = '';
}
addBtn.addEventListener('click', () => {
	const addedName = courseName.value;
	const addedRating = courseRating.value;

	if(addedName.trim().length <= 0 ||
		addedRating.trim().length <=0 ||
		addedRating >5 ||
		addedRating <1
		){
			alertMessage.create({
				message:'Enter Details Properly',
				header:'Invalid Inputs',
				buttons:['Okay']}).then(alertElement =>{
					alertElement.present();
				});
			return;
		}
		const createElement = document.createElement('ion-item');
		createElement.innerHTML = `<strong>${addedName}</strong> &nbsp; ${addedRating}/5`;

		displayData.appendChild(createElement);
		clear();
	
});