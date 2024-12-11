import emailjs from "emailjs-com";
import { showSuccessAlert, showErrorAlert } from "@/assets/components/Alert";

export const SendEmail = (e, formData, phone) => {
  e.preventDefault();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID;

  if (!serviceID || !templateID || !userID) {
    console.error("Missing EmailJS configuration in .env file");
    showErrorAlert("Email configuration error. Please contact the administrator.");
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
      showSuccessAlert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("FAILED...", error);
      showErrorAlert("Failed to send message. Please try again.");
    });
};
