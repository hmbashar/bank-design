// Step 1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function() {

    // Step 2: get user input value for deposit or withdraw amount

    //get user deposit amount
    const userDepositFiled = document.getElementById('user-deposit');
    const NewDepositAmount = parseFloat(userDepositFiled.value); // get value from user input with convert string to number
    
    
    //clear the deposit field
    userDepositFiled.value = '';
    // check if is input number then work or if is NaN (Not a Number) then return black
    if(isNaN(NewDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }

    //Step 3: get the total current deposit amount
    const totalDepositElement = document.getElementById('total-deposit');   
    const PreviousDepositTotal = parseFloat(totalDepositElement.innerText); // get value from current deposit amount with convert string to number
    // add number to set the total amount deposit
    const CuttentDepositTotal = PreviousDepositTotal + NewDepositAmount;

    // step 04: set deposit amount with new value
    totalDepositElement.innerText = CuttentDepositTotal;

    //step 05:  get current total balance
    const previousBalance = document.getElementById('bank-total-balance');
    const userBalanceAmount = parseFloat(previousBalance.innerText);
    

    //Step 06:  Equal deposit and current balance
    const newBalanceTotal = userBalanceAmount + NewDepositAmount;

    
    // Step 07: set total balance amount with new deposit
    previousBalance.innerText = newBalanceTotal;



    
   

    
});