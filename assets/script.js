const loginBtn =document.getElementById('login_btn');
const loginArea = document.getElementById('loginArea');
const transacitonArea = document.getElementById('transaciton-area');



loginBtn.addEventListener("click",function(){
    loginArea.style.display ='none';
    transacitonArea.style.display ='block'
})
//deposit button//

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener("click",function(){

const depositNumber = getInputNumber('depositAmount');


updateSpanText("currentDeposit",depositNumber);
updateSpanText("currentBalance",depositNumber);




document.getElementById('depositAmount').value = ""; 
})
//withdraw button //
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener("click",function(){
  const withdrawNumber = getInputNumber('withdrawAmount');

  updateSpanText("currentWithdraw",withdrawNumber);

  updateSpanText("currentBalance", -1 * withdrawNumber);

  document.getElementById('withdrawAmount').value = "";  

})


function getInputNumber(id){

    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id,depositNumber){
    const current = document.getElementById(id).innerText;

    const currentNumber = parseFloat(current);
    
    const totalAmount = currentNumber + depositNumber;
    
    document.getElementById(id).innerText = totalAmount;

}