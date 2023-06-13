function sendMessage(event) {
    event.preventDefault();

    // Retrieve form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform validation and submission logic
    // For example, you can use AJAX to send the form data to a server-side script

    // Reset the form after submission
    document.getElementById("myForm").reset();
}

function experience() {
    // Handle the "Experience" tab click event
    // Add your code here
}

function education() {
    // Handle the "Education" tab click event
    // Add your code here
}

function opentab(tabName) {
    // Handle the tab switching l
}
