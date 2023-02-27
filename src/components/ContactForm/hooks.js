import emailjs from "emailjs-com";

export const useComponentLogic = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_10lf8mj",
        "template_amnzk57",
        event.target,
        "user_xxd8peTqtEGe05vd1LtJu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    event.target.reset();
  };

  return { sendEmail };
};
