import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { Outlet } from "react-router-dom";

import Title from "./components/Title";

function App() {
  return (
    <AuthProvider>
      <Title />
      <div className="container">
        <Outlet />
      </div>
    </AuthProvider>
  );
}

export default App;
