import React from "react";
const Contact = () => {
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [statusTwo, setStatusTwo] = React.useState("");

  const postMessage = (e) => {
    e.preventDefault();
    setfirstName("");
    setlastName("");
    setPhone("");
    setStatus("");
    setEmail("");
    setStatus("Message Sent!");
    setStatus(
      "Thank you for reaching out. We will be intouch with you shortly."
    );
  };
  return (
    <div>
      <h1>Contact us</h1>
      <form onSubmit={postMessage}>
        <p>Name</p>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        ></input>
        <br></br>
        <p>Phone Number</p>
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <br></br>
        <p>E-mail</p>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <p>{status}</p>
      <p>{statusTwo}</p>
    </div>
  );
};

export default Contact;
