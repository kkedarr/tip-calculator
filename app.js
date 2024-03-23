window.onload = () => {
    // to call the fucntion to calculate the tip
    document.querySelector("#calculate").onclick = calculateTip;
}

function calculateTip() {
    let amount = document.querySelector("#amount").value;
    let persons = document.querySelector("#persons").value;
    let service = document.querySelector("#services").value;

    console.log(service); // an if statement to display an alert-message when you don't enter all necessary values

    if (amount === '' && service === "Select") {
        alert("Please enter valid values");
        return;
    }

    // to check number of people on the table for bill sharing
    if (persons === "1") {
        document.querySelector("#each").style.display = "None"; // if theres only one person, there's no need to display 'each'
    } else {
        document.querySelector("#each").style.display = "block";
    }

    //calculating the tip by multiplying the total bill by type of services rendered, then dividing the answer by the number of people
    let total = (amount * service) / persons;
    total = total.toFixed(2); // fixing the total to amount to up to 2 digits of decimal


    //to dusplay the tip value
    document.querySelector(".tip").style.display = "block";
    document.querySelector("#total").innerHTML = total;
}