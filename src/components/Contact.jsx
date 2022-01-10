import { Link } from "react-router-dom";
const Contact = ({ deleteHandler, contactList }) => {
  return (
    <section>
      {contactList.map((c) => {
        return (
          <ul key={c.id}>
            <Link to={`user/${c.id}`} state={{ name: c.name, email: c.email }}>
              <li>{c.name}</li>
              <li>{c.email}</li>
            </Link>
            <Link to={`/edit/${c.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => deleteHandler(c.id)}>Delete</button>
          </ul>
        );
      })}
    </section>
  );
};

export default Contact;
