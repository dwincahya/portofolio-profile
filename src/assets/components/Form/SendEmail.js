import emailjs from "emailjs-com";

export const SendEmail = (e, formData, phone) => {
  e.preventDefault();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID;

  if (!serviceID || !templateID || !userID) {
    console.error("Missing EmailJS configuration in .env file");
    alert("Email configuration error. Please contact the administrator.");
    return;
  }

  const emailParams = {
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    message: formData.message,
    phone: phone,
  };

  emailjs
    .send(serviceID, templateID, emailParams, userID)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Failed to send message. Please try again.");
    });
};
