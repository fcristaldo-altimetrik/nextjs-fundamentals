import { NextPage, GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import Link from "next/link";

interface UsersPageProps {
  users: {
    id: string;
    name: string;
    email: string;
  }[];
}
const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h6>{user.name}</h6>
            <h6>{user.email}</h6>
            <Link href={`/user/${user.id}`}>View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/users");
  return {
    props: { users: [...res.data] },
  };
};

export default UsersPage;
