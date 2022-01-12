import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { ImUser } from "react-icons/im";
const EditContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  //////////////////
  const id = useParams().id;
  useEffect(() => {
    axios
      .get(`/contacts/${id}`)
      .then((r) => setContact({ name: r.data.name, email: r.data.email }))
      .catch();
  }, []);
  /////////////////////
  const navigate = useNavigate();
  const AddHandler = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("پرش کن خب");
      return;
    }
    try {
      await axios.put(`/contacts/${id}`, contact);
      await axios.get("/contacts");
      navigate("/");
    } catch (error) {}
  };
  ///////////////////
  const cancelHandler = () => {
    navigate("/");
  };
  return (
    <section class="mt-5">
      <form onSubmit={AddHandler}>
        <h3 class="flex justify-center text-violet-600 font-medium text-xl md:text-2xl">
          Edit Contact
        </h3>
        <div class="pr-5 pl-5">
          <div>
            <span className="userIcon">
              <ImUser />
            </span>
            <input
              type="text"
              name="name"
              placeholder="name"
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
              name="email"
              placeholder="email"
              value={contact.email}
              onChange={changeHandler}
              class="w-full mt-3 pl-9 py-1"
            />
          </div>
        </div>
        <div class="flex justify-center mt-5">
          <button className="add" type="submit">
            Update
          </button>
          <button className="cancel" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditContact;
