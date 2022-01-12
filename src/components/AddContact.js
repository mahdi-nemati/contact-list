import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import { ImUser } from "react-icons/im";
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
  const cancelHandler = () => {
    navigate("/");
  };
  return (
    <section class="mt-5">
      <form onSubmit={AddHandler}>
        <h3 class="flex justify-center text-violet-600 font-medium text-xl md:text-2xl ">
          Add New Contact
        </h3>
        <div class="pr-5 pl-5">
          <div>
            <span className="userIcon">
              <ImUser />
            </span>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={contact.name}
              onChange={changeHandler}
              class="w-full mt-3 pl-9 py-1"
            />
          </div>
          <div>
            <span className="emailIcon">
              <AiOutlineMail />
            </span>
            <input
              type="text"
              name="Email"
              placeholder="Email"
              value={contact.email}
              onChange={changeHandler}
              class="w-full mt-3 pl-9 py-1"
            />
          </div>
        </div>
        <div class="flex justify-center mt-5">
          <button className="add" type="submit">
            Save
          </button>
          <button className="cancel" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddContact;
