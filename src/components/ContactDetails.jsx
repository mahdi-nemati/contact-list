import { useLocation, Link } from "react-router-dom";
const ContactDeatails = () => {
  const location = useLocation();
  const { name, email } = location.state;
  return (
    <section>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <Link to="/">Home</Link>
    </section>
  );
};

export default ContactDeatails;
