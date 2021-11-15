import axios from "axios";
import { NavBar } from "components/NavBar";
import { User } from "interfaces";
import { GetServerSideProps, NextPage } from "next";
import React, { FormEventHandler, useState } from "react";

interface UserConfigProps {
  user: User;
}

const UserConfigPage: NextPage<UserConfigProps> = ({ user }) => {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");

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
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/user");
  return {
    props: { user: { ...res.data } },
  };
};

export default UserConfigPage;
