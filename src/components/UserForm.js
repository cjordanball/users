import { useState } from "react";

const UserForm = ({ handlerFunc }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handlerFunc({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
