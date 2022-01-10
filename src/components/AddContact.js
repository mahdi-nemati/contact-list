import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ submitHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const AddHandler = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("پرش کن خب");
      return;
    }
    submitHandler(contact);
    setContact({ name: "", email: "" });
    navigate("/");
  };

  return (
    <section>
      <form onSubmit={AddHandler}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={contact.name}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={contact.email}
          onChange={changeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddContact;
