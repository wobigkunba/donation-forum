import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Input, Button } from "@nutui/nutui-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const handleLogin = () => {
    const authData = {
      username,
      password,
      isLoggedIn: true,
    };
    setUser(authData);
    window.history.back();
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
