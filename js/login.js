//step 1 add click event handler  with the submit button
document.getElementById('btn-submit').addEventListener('click', function() {
    //step 2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //step 3: get the  password inside the password input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //step 4 verify user email and password

    if(email === 'testemail@gmail.com' && password === 'testpassword') {
        window.location.href = 'bank.html';
    }else {
       alert('Invalid user information');
    }

});