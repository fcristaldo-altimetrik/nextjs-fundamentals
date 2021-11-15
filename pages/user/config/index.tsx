import { NavBar } from "components/NavBar";
import React, { FormEventHandler, useState } from "react";

function UserConfigPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    //do something
    //axios.post("/api/user/config",{name,email})
  };
  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default UserConfigPage;
