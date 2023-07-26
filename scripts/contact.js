const button = document.getElementById("contact-form-button");

const nameInput = document.getElementById("contact-form-name");
const emailInput = document.getElementById("contact-form-email");
const messageInput = document.getElementById("contact-form-message");

emailjs.init("c80WuKbGmcpaFM0Qr");

button.addEventListener("click", async () => {
    button.disabled = true;
    button.innerText = "Bitte warten...";

    const response = await emailjs.send("default_service", "template_lteotsh", {
        from_name: nameInput.value,
        reply_to: emailInput.value,

        message: messageInput.value

    });

    if (response.status === 200) {
        alert("Die Nachricht ging durch! Die Antwort sollte bald verfügbar sein.");
    } else {
        alert("Es ist ein Fehler aufgetreten, bitte versuchen Sie es später noch einmal.");
    }

    button.disabled = false;
    button.innerText = "Senden";
});