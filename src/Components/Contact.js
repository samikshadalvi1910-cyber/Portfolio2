import React from "react";

function Contact() {

  return (

    <section id="contact" className="section">

      <h1>Contact Me</h1>

      <form>

        <input
          type="text"
          placeholder="Enter Name"
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
        />

        <br /><br />

        <textarea
          rows="5"
          placeholder="Enter Message"
        ></textarea>

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </section>

  );
}

export default Contact;