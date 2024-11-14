// Initialize EmailJS with your public key
emailjs.init("aTU8Nc-jAP6ZnoP61");

// JavaScript to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.querySelector("button");
    const statusMessage = document.createElement("p");
    statusMessage.id = "status-message";
    statusMessage.style.display = "none";
    form.appendChild(statusMessage);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent traditional form submission

        // Collect form data
        const templateParams = {
            client_name: form.querySelector('input[name="client__name"]').value,
            client_email: form.querySelector('input[name="client_email"]').value,
            phone_number: form.querySelector('input[name="phoneNumber"]').value,
            service: form.querySelector('select[name="service"]').value,
            contact_message: form.querySelector('textarea[name="contact__message"]').value,
        };

        // Disable submit button temporarily to prevent multiple submissions
        submitButton.disabled = true;

        // Send data through EmailJS
        emailjs
            .send("service_wk4nb8r", "template_du6tzfp", templateParams)
            .then(
                function (response) {
                    // Display success message
                    statusMessage.innerText = "Message sent successfully!";
                    statusMessage.style.color = "green";
                    statusMessage.style.display = "block";

                    // Automatically hide message after 5 seconds
                    setTimeout(function () {
                        statusMessage.style.display = "none";
                    }, 5000);

                    // Clear form fields
                    form.reset();
                },
                function (error) {
                    // Display error message
                    statusMessage.innerText = "Failed to send your message. Please try again later.";
                    statusMessage.style.color = "red";
                    statusMessage.style.display = "block";

                    // Automatically hide error message after 5 seconds
                    setTimeout(function () {
                        statusMessage.style.display = "none";
                    }, 5000);

                    console.error("Error:", error); // Log error details for debugging
                }
            )
            .finally(() => {
                // Re-enable the submit button
                submitButton.disabled = false;
            });
    });
});

