import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

interface User {
  id?: string;
  name: string;
  email: string;
}
const UserProfilePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((res) => res.data)
      .then((data: User[]) => data.filter((d) => d.id === id)[0])
      .then((u) => setUser(u));
  }, [id]);
  return (
    <div>
      <h6>{user?.id}</h6>
      <h6>{user?.name}</h6>
      <h6>{user?.email}</h6>
    </div>
  );
};

export default UserProfilePage;
