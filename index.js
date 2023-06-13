function sendMessage(event) {
    event.preventDefault();

    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    document.getElementById("myForm").reset();
}

function experience() {
    document.getElementById("skills").style.display = "none";
    document.getElementById("experience").style.display = "block";
    document.getElementById("education").style.display = "none";
}


