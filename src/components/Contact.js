import React from "react";
import ContactUs from "./ContactUs.css";
const Contact = () => {
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [statusTwo, setStatusTwo] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const postMessage = (e) => {
    e.preventDefault();
    setfirstName("");
    setlastName("");
    setPhone("");
    setStatus("");
    setEmail("");
    setDesc("");
    setStatus("Message Sent!");
    setStatus(
      "Thank you for reaching out. We will be intouch with you shortly."
    );
  };
  return (
    <div className="contactusbody">
      <h1 className="h1font">Contact us</h1>
      <form onSubmit={postMessage}>
        <p className="pfont">Name</p>
        <textarea
          columns="15"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        ></textarea>

        <textarea
          columns="15"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        ></textarea>
        <br></br>
        <p className="pfont">Phone Number</p>
        <textarea
          columns="15"
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></textarea>
        <br></br>
        <p className="pfont">E-mail</p>
        <textarea
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></textarea>
        <br></br>
        <br></br>
        <textarea
          className="contacttextarea"
          rows="15"
          columns="100"
          type="text"
          placeholder="Details"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <br></br>
        <button className="contactbutton" type="submit">
          Submit
        </button>
      </form>
      <p className="pfont">{status}</p>
      <p className="pfont">{statusTwo}</p>
    </div>
  );
};

export default Contact;
