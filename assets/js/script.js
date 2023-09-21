function handleGetFormData(){
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    return {
        name,
        email,
        city,
        zipCode,
        status
    };
}

function isNumber(str) {
    // Check if the input is valid
    if (str === undefined || str === null) {
        return false;
    }

    for (let i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i]))) {
            return false;
        }
    }
    return true;
}

function checkboxIsChecked() {
    const checkbox = document.getElementById('status');
    return checkbox.checked;
}

function validateFormData(formData) {
    return formData !== null && isNumber(formData.zipCode) && checkboxIsChecked();
}

function submit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
   
    const formData = handleGetFormData();

    if (!validateFormData(formData)) {
        document.getElementById('warning').textContent = 'Periksa form anda sekali lagi';
    } else {
        document.getElementById('warning').textContent = '';
    }
}

document.getElementById('submit-form').addEventListener('submit', submit);
