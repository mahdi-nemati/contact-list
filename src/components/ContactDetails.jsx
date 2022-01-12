import { useLocation, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const ContactDeatails = () => {
  const location = useLocation();
  const { name, email } = location.state;
  return (
    <section>
      <span className="contactIcon">
        <FaUserCircle />
      </span>
      <p class="flex justify-center mt-5 text-3xl">
        <span class="text-violet-600">{name}</span>
      </p>

      <div class="flex justify-center mt-5 text-lg">
        <div class="text-violet-600">{email}</div>
      </div>

      <div class="flex justify-center mt-5">
        <button className="add">Send Message</button>
        <Link to="/" className="cancel">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ContactDeatails;
