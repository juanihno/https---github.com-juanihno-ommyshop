import { useState } from "react";
import { addUser } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import "./newUser.css";

export default function NewUser() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});


  const handleClick = (e) => {
    e.preventDefault();
    const user = { ...inputs };
    addUser(user, dispatch);
  };
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input name="username" type="text" placeholder="john"
            onChange={handleChange}
            />
        </div>
        
        <div className="newUserItem">
          <label>Email</label>
          <input name="email" type="text" placeholder="john@gmail.com" 
            onChange={handleChange}
            />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input name="password" type="text" placeholder="password" 
            onChange={handleChange}
            />
        </div>
        <button  onClick={handleClick} className="newUserButton">Create</button>
      </form>
    </div>
  );
}
