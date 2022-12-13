import styles from "./Contact.module.css";
import { useState } from "react";

export default function About() {
  const [submitted, setSubmitted] = useState(false);

  const Userdata = async (event) => {
    event.preventDefault();
    console.log("Sending");
    setSubmitted(true);

    let userdata = {
      Name: event.target.Name.value,
      Email: event.target.Email.value,
      Message: event.target.Message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    });
  };

  return (
    <form className={styles.form} onSubmit={(e) => Userdata(e)}>
      <label className={styles.nameForm} htmlFor="Name">
        Full Name:{" "}
      </label>
      <input
        type="text"
        className={styles.nameInput}
        placeholder="John Doe"
        name="Name"
        id="Name"
        required
      />

      <label className={styles.emailForm} htmlFor="Email">
        Email:{" "}
      </label>
      <input
        type="email"
        className={styles.emailInput}
        placeholder="johndoe@johndoe.com"
        name="Email"
        id="Email"
        required
      />

      <label className={styles.messageForm} htmlFor="Message">
        Message:{" "}
      </label>
      <textarea
        type="text"
        className={styles.message}
        placeholder="Write something.."
        name="Message"
        id="Message"
        required
      ></textarea>

      <button  type="submit" />
      {submitted == true ? alert("Thank you for your message") : ""}
    </form>
  );
}

