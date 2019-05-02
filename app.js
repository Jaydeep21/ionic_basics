const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpenseOutput = document.querySelector('#total-expenses');
const ionAlertController =document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () =>{
	reasonInput.value = '';
	amountInput.value = '';
};

confirmBtn.addEventListener('click', ()=>{
	const enteredReason = reasonInput.value;
	const enteredAmount = amountInput.value;

	if(enteredAmount <= 0 || enteredAmount.trim().length <= 0 || enteredReason.trim().length <= 0)
	{
		ionAlertController.create({message: "Please enter a vaild reason", 
			header: "Invaild Inputs", 
			buttons:['Okay']}).then(alertElemet => {
				alertElemet.present();
			});
		return;
	}
	
	const newItem = document.createElement('ion-item');
	newItem.textContent = enteredReason + ': $' + enteredAmount;

	expensesList.appendChild(newItem);
	totalExpenses += +enteredAmount;
	totalExpenseOutput.textContent = totalExpenses;
	clear();
});

cancelBtn.addEventListener('click', clear);