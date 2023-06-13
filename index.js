document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform form validation and submission logic here
    // For example, you can use an AJAX request to send the form data to a server-side script

    // Reset the form after submission
    document.getElementById("myForm").reset();
});
