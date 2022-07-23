


// FORM VALIDATION


function sendMail() {

    var fullName = document.getElementById("fullName").value;
    var subject = document.getElementById("subject").value;
    var email_id = document.getElementById("email_id").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.color = "red";

    var text;
    if (fullName.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 5) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return true;
    }

    if (email_id.indexOf("@") == -1 || email_id.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 10) {
        text = "Please Enter More Than 10 Characters";
        error_message.innerHTML = text;
        return send();
    }
    return send();

}

function send() {
    var params = {
        from_name : document.getElementById("fullName").value,
        mobile_number : document.getElementById("mobile_number").value,
        food_name : document.getElementById("food_name").value,
        email_id : document.getElementById("email_id").value,
        order : document.getElementById("Q_number").value,
        d_date : document.getElementById("d_date").value,
        address : document.getElementById("del_address").value,
        message : document.getElementById("message").value,
       


    }

    emailjs.send("service_e0qkszc", "template_ar8g8zi", params).then(function (res) {
        alert("Your Message is Successfully Sent! ");
    })



}







