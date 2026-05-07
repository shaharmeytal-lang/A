import React from "react";

function ContactPage() {
  return (
    <div className="page contact">

      <h1>צור קשר</h1>

      <form className="contact-form">

        <input type="text" placeholder="שם מלא" />
        <input type="email" placeholder="אימייל" />

        <textarea placeholder="הודעה"></textarea>

        <button type="submit">שליחה</button>

      </form>

      <div className="contact-info">
        <p>📞 050-0000000</p>
        <p>📧 example@mail.com</p>
        <p>📍 ישראל</p>
      </div>

    </div>
  );
}

export default ContactPage;
