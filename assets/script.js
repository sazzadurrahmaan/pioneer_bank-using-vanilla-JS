const loginBtn =document.getElementById('login_btn');
const loginArea = document.getElementById('loginArea');
const transacitonArea = document.getElementById('transaciton-area');
const btnDeposit =  document.getElementById('btn-deposit');
const depositAmount = document.getElementById('deposit_amount');
const currentDeposit = document.getElementById('add-deposit-number');
const currentBalance = document.getElementById('currentBalance');




loginBtn.addEventListener('click',function(){
    loginArea.style.display ='none';
    transacitonArea.style.display ='block'
})
btnDeposit.addEventListener('click',function(){
    
    const depositnumber =getInputnumber('deposit_amount')
    // const getdepositnumber = getInputnumber("deposit_amount")
   
//     const totalDeposit = depositnumber + currentDepositnumber;
   
//     document.getElementById('add-deposit-number').innerText = totalDeposit;
    


// const currentBalancenumber = parseFloat(currentBalance.innerText);
// const totalBalance = currentBalancenumber+depositnumber
// document.getElementById('currentBalance').

    upadateSnapText("add-deposit-number",depositnumber);

    upadateSnapText("currentBalance",depositnumber);
 
depositAmount.value="";
}) 

// btnWithDraw.addEventListener('click',function(){

//   const getWithdrawnumber =   getInputnumber("withdrawAmount");
//    console.log(getWithdrawnumber)
// })

// function getInputnumber(id){
//     const withdrawAmount = document.getElementById(id);
//     const withdrawAmountnumber = parseFloat(withdrawAmount.value);
//     return withdrawAmountnumber; 

// }

function upadateSnapText(id,depositnumber){

    const current = document.getElementById(id);

    const currentnumber = parseFloat(current.innerText);

    const total = currentnumber + depositnumber;

    document.getElementById(id).innerText = total ;
}

//withdraw

const btnWithDraw = document.getElementById('btn-withdraw');

btnWithDraw.addEventListener('click',function(){
        const amountNumber = getInputnumber("withdrawAmount");
            console.log(amountNumber);
})

function getInputnumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;                                                                                              
}