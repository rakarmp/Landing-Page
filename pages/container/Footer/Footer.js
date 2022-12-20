import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  const emailIcons = "assets/email.png";
  const phoneIcons = "assets/mobile.png";

  return (
    <>
      <h2 className="head-text">Ngopi Bareng & Chat Aku</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={phoneIcons} alt="email" />
          <a href="mailto:rakaabdirmp@gmail.com" className="p-text">
            rakaabdirmp@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={emailIcons} alt="phone" />
          <a href="tel:+62 8954 1618 7586" className="p-text">
            +62 8954 1618 7586
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Nama Kamu"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Email Kamu"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Pesan Kamu Ke Aku"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Kirim Pesan" : "Sedang Dikirim ..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Makasih Udah Mau Liat" !</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
