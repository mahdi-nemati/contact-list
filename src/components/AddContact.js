import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const AddHandler = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("پرش کن خب");
      return;
    }
    try {
      await axios.post("/contacts", contact);
      setContact({ name: "", email: "" });
      navigate("/");
    } catch (error) {}
  };

  return (
    <section class="mt-5">
      <form onSubmit={AddHandler}>
        <h3 class="flex justify-center">Add New Contact</h3>
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={contact.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={contact.email}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddContact;
