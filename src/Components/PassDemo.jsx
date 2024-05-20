import React, { useState } from "react";
import { Eye } from "@phosphor-icons/react";
import { EyeSlash } from "@phosphor-icons/react";
import "./Style.css";

const PasswordDemo = () => {
  const [password, setPassword] = useState(true);
  return (
    <div className="App">
      <div className="input-container ">
        <input type={password ? "password" : "text"} className="input-control" />
        <span className="cursor-pointer" onClick={() => setPassword(!password)}>
          {password ? <EyeSlash /> : <Eye />}
        </span>
      </div>
    </div>
  );
};

export default PasswordDemo;
