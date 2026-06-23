function calculateAge() {

    let dob = document.getElementById("dob").value;
    let error = document.getElementById("error");
    let result = document.getElementById("result");

    error.innerHTML = "";
    result.innerHTML = "";

    if (dob === "") {
        error.innerHTML = "Please select your Date of Birth!";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += 30;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML =
        "Age: " + years + " Years, " +
        months + " Months, " +
        days + " Days";
}