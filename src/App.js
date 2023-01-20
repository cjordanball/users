import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (newUser) => {
    setUsers((users) => [...users, newUser]);
  };

  return (
    <div>
      <UserForm handlerFunc={onUserAdd} />
      <UserList users={users} />
    </div>
  );
}

export default App;
