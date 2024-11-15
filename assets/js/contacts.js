/*!
 * File: contacts.js
 * Author: Anas Akbar Saqi
 * Description: Main contacts JS for Anas Akbar Saqi's portfolio.
 * License: GPLv3 (or your preferred license)
 * Date: November 2024
 */

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
      contact_message: form.querySelector('textarea[name="contact__message"]')
        .value,
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
          statusMessage.innerText =
            "Failed to send your message. Please try again later.";
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

// For Whatsapp msg

window.onload = function () {
  setTimeout(function () {
    var url =
      "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?90046";
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url;
    var options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#00e785",
        ctaText: "Chat with Anas",
        borderRadius: "25",
        marginLeft: "0",
        marginRight: "20",
        marginBottom: "20",
        ctaIconWATI: false,
        position: "right",
      },
      brandSetting: {
        brandName: "ANAS RAJPUT",
        brandSubTitle: "undefined",
        brandImg:
          "https://media.licdn.com/dms/image/v2/D4D03AQFwcNaWIV_Emw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730449874520?e=1736985600&v=beta&t=T58uIXprOlHj5y0KRQJ8M3odJ1c6zyQmUev5xL8IDA4",
        welcomeText: "Hi there!\nHow can I help you?",
        messageText: "Hello, %0A I have a question about {{page_link}}",
        backgroundColor: "#00e785",
        ctaText: "Chat with Anas",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "923454379166",
      },
    };

    s.onload = function () {
      CreateWhatsappChatWidget(options);
    };

    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  }, 2000); // Delay of 2000 milliseconds (3 seconds)
};
