const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');

confirmBtn.addEventListener('click',()=>{
    const txtReason = reasonInput.value;
    const txtAmount = amountInput.value;
    if(txtReason.trim().length<=0 || txtAmount.trim().length<=0||txtAmount.value<=0){
        console.log('Negative Scenario Reason or Amount is blank');
        return
    }
    console.log(txtReason);
    console.log(txtAmount);
    console.log('txtReason and txtAmount is not empty');

});