import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
const Contact = ({ deleteHandler, contactList }) => {
  return (
    <section class="mt-3">
      {contactList ? (
        contactList.map((c) => {
          return (
            <section key={c.id}>
              <ul
                key={c.id}
                class="flex justify-between flex-row 
                items-center px-5 py-2 mb-2 
                  "
              >
                <Link
                  to={`user/${c.id}`}
                  state={{ name: c.name, email: c.email }}
                >
                  <li class="flex justify-center items-center">
                    <span class="text-3xl md:text-4xl xl:text-5xl text-violet-600">
                      <FaUserCircle />
                    </span>
                    <div class="flex ml-4 md:text-lg xl:text-2xl">
                      <span class="font-serif"> {c.name}</span>
                    </div>
                  </li>
                </Link>
                <div class="flex">
                  <Link to={`/edit/${c.id}`} className="edit">
                    <FaUserEdit />
                  </Link>
                  <button
                    onClick={() => deleteHandler(c.id)}
                    className="delete"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </ul>
              <span class="flex justify-center">
                <hr class="w-11/12 md:w-full" />
              </span>
            </section>
          );
        })
      ) : (
        <p>Loading ...</p>
      )}
    </section>
  );
};

export default Contact;
