const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-clear');
const confirmBtn = document.querySelector('#btn-confirm');
const expenseList = document.querySelector('#expenses-list');
const totalExpense = document.querySelector('#total-expense');

let expenseSum = 0;
totalExpense.textContent=expenseSum;

const clear = () =>{
    reasonInput.value = '';
    amountInput.value = '';
};

confirmBtn.addEventListener('click',()=>{
    const txtReason = reasonInput.value;
    const txtAmount = amountInput.value;
    if(txtReason.trim().length<=0 || txtAmount.trim().length<=0||txtAmount.value<=0){
        console.log('Negative Scenario Reason or Amount is blank');
        return
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = txtReason + " -  "+txtAmount;
    expenseList.appendChild(newItem);
    expenseSum+= +txtAmount;
    totalExpense.textContent=expenseSum;
    clear();

});

cancelBtn.addEventListener('click',clear);
