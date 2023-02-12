//step 01
// step 02 get the withdraw amount from the withdraw filed.
// Step 03 Get Previous withdraw total
// Step 04 Calculation total withdraw
// step 5 set total withdraw amount after calculation
// step 6 get current total balance
// step 7  Equal deposit and current balance
//step 8 set total balance amount with new deposit

document.getElementById('btn-withdraw').addEventListener('click', function() {
   
    //step 2
    const NewWithdrawField = document.getElementById('user-withdraw');
    const NewWithdrawAmount = parseFloat(NewWithdrawField.value); // get value from user input with convert string to number

    //step 3
    const PreviousWithdrawTotalAmount = document.getElementById('total-withdraw');
    const PreviousWithdrawTotal = parseFloat(PreviousWithdrawTotalAmount.innerText); // get value from current withdraw amount with convert string to number

    //Step 4
    const currentWithdrawTotal = PreviousWithdrawTotal + NewWithdrawAmount;
    
    //Set 5
    PreviousWithdrawTotalAmount.innerText = currentWithdrawTotal; 

    //step 06:  
    const previousBalance = document.getElementById('bank-total-balance');
    const userBalanceAmount = parseFloat(previousBalance.innerText);


    //Step 07: 
    const newBalanceTotal = userBalanceAmount - NewWithdrawAmount;


    // Step 08: 
    previousBalance.innerText = newBalanceTotal;



   NewWithdrawField.value = '';



});