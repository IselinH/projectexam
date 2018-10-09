function validateForm() {
    const form = document.forms["join"];
    var phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (form.name.value == "") {
        alert("Name must be filled out");
        return false;
    }

    if (form.surname.value == "") {
        alert("Surname must be filled out");
        return false;
    }

    if (form.date.value == "") {
        alert("Date must be filled out");
        return false;
    }

    if (form.email.value == "") {
        alert("Email must be filled out");
        return false;
    }

    if (form.phone.value == "") {
        alert("Phone must be filled out");
        return false;
    }
    else if (!form.phone.value.match(phoneReg)) {
        alert("Invalid phone number format");
        return false;
    }

    if (form.about.value == "") {
        alert("Please write about yourself");
        return false;
    }

    if (form.motivation.value == "") {
        alert("Please write why you want to become an astronaut");
        return false;
    }
}