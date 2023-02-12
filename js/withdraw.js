//step 01
// step 02 get the withdraw amount from the withdraw filed.
// Step 03 Get Previous withdraw total
// Step 04 Calculation total withdraw
// step 5 set total withdraw amount after calculation
// step 6 get current total balance
// step 7  Equal deposit and current balance
//step 8 set total balance amount with new deposit

document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step 2
    const NewWithdrawField = document.getElementById('user-withdraw');
    const NewWithdrawAmount = parseFloat(NewWithdrawField.value); // get value from user input with convert string to number
  
   //clear the withdraw field
    NewWithdrawField.value = '';


    // check if is input number then work or if is NaN (Not a Number) then return black
    if(isNaN(NewWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }
    //step 3
    const PreviousWithdrawTotalAmount = document.getElementById('total-withdraw');
    const PreviousWithdrawTotal = parseFloat(PreviousWithdrawTotalAmount.innerText); // get value from current withdraw amount with convert string to number


    //step 06:  
    const previousBalance = document.getElementById('bank-total-balance');
    const previousBalanceAmount = parseFloat(previousBalance.innerText);

    if (NewWithdrawAmount > previousBalanceAmount) {
        alert('insufficient balance');
    } else {

        //Step 4
        const currentWithdrawTotal = PreviousWithdrawTotal + NewWithdrawAmount;

        //Set 5
        PreviousWithdrawTotalAmount.innerText = currentWithdrawTotal;

        //Step 07: 
        const newBalanceTotal = previousBalanceAmount - NewWithdrawAmount;

        // Step 08: 
        previousBalance.innerText = newBalanceTotal;
    }


  



});