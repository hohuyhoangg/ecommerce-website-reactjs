import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
    );
    setname("");
    setEmail("");
    setmessage("");
  };

  return (
    <>
      <div className="contactSection">
        <h2>Contact Us</h2>
        <div className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501726.251541797!2d106.69522764999999!3d10.754792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1738659606004!5m2!1sen!2s"
            width="800"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="teammap"
          ></iframe>
        </div>
        <div className="contactInfo">
          <div className="contactAddress">
            <div className="address">
              <h3>Store in Ho Chi Minh</h3>
              <p>
                123, Nguyen Dinh Chieu, District 3
                <br /> Viet Nam
              </p>
              <p>
                admin@team.com
                <br />
                +84 123 456 789
              </p>
            </div>
            <div className="address">
              <h3>Store in Ha Noi</h3>
              <p>
                456, Nguyen Trai, Thanh Xuan
                <br /> Viet Nam
              </p>
              <p>
                contact@team.com
                <br />
                +84 987 654 321
              </p>
            </div>
          </div>
          <div className="contactForm">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name *"
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email address *"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                rows={10}
                cols={40}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
