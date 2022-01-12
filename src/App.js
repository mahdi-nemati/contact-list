import "./styles/App.css"
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { Route, Routes } from "react-router-dom";
import ContactDeatails from "./components/ContactDetails";
import axios from "axios";
import EditContact from "./components/EditContact";

function App() {
  axios.defaults.baseURL = "http://localhost:3001";

  return (
    <section>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/Add" element={<AddContact />} />
        <Route path="user/:id" element={<ContactDeatails />} />
        <Route path="edit/:id" element={<EditContact />} />
      </Routes>
    </section>
  );
}

export default App;
