function validate() {
    let fieldsetCompanyInfo = document.querySelector('#companyInfo');
    let checkboxEl = document.querySelector('#company');
    let buttonSumbit = document.querySelector('#submit');
    buttonSumbit.addEventListener('click', checkForValidity);

    checkboxEl.addEventListener('change', (e) => {
        let isChecked = e.target.checked;
        if (isChecked) {
            fieldsetCompanyInfo.style.display = 'block';
        } else {
            fieldsetCompanyInfo.style.display = 'none';
        }
    });

    function checkForValidity(e) {
        e.preventDefault();
        let userName = document.querySelector('#username');
        let password = document.querySelector('#password');
        let confirmPassword = document.querySelector('#confirm-password');
        let email = document.querySelector('#email');

        let userNamePattern = /^[A-Za-z\d]{3,20}$/;
        // let userNamePattern = /^[A-Za-z0-9]{3,20}$/;
        let passwordPattern = /^[A-Za-z\d_]{5,15}$/;
        // let passwordPattern = /^\w{5,15}$/;
        let confirmPasswordPattern = /^[A-Za-z\d_]{5,15}$/;
        // let confirmPasswordPattern = /^\w{5,15}$/;
        // let emailPattern = /^[A-Za-z]+@[A-Za-z\.A-Za-z]+$/;
        let emailPattern = /^.*@.*\..*$/;

        let isValidUserName = (userNamePattern.test(userName.value));
        let isValidPassword = passwordPattern.test(password.value);
        let isValidConfirmPassword = confirmPasswordPattern.test(confirmPassword.value);
        let isValidEmail = emailPattern.test(email.value);


        if (!isValidUserName) {
            userName.style.borderColor = 'red';
            // userName.style.setProperty('border-color', 'red');
        } else {
            userName.style.border = 'none';
        }

        if (!isValidEmail) {
            email.style.borderColor = 'red';
        } else {
            email.style.border = 'none';
        }

        if (isValidPassword && isValidConfirmPassword && password.value === confirmPassword.value) {
            password.style.border = 'none';
            confirmPassword.style.border = 'none';
        } else {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
        }

        let companyNumber = fieldsetCompanyInfo.children[1].children[1];
        let companyNumberPattern = /\d+/;
        let isValidCompanyNumber = companyNumberPattern.test(companyNumber.value) && (Number(companyNumber.value) >= 1000 && Number(companyNumber.value) <= 9999);
        if (isValidCompanyNumber) {
            companyNumber.style.border = 'none';
        } else {
            companyNumber.style.borderColor = 'red';
        }

        let divValid = document.querySelector('#valid');
        if (checkboxEl.checked) {
            if (isValidUserName && isValidEmail && isValidPassword && isValidConfirmPassword && password.value === confirmPassword.value && isValidCompanyNumber) {
                divValid.style.display = 'block';
            } else {
                divValid.style.display = 'none';
            }
        } else {
            if (isValidUserName && isValidEmail && isValidPassword && isValidConfirmPassword && password.value === confirmPassword.value) {
                divValid.style.display = 'block';
            } else {
                divValid.style.display = 'none';
            }
        }
    }
}