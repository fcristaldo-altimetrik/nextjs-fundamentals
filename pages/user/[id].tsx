import React from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import axios from "axios";
import { User } from "interfaces";

interface UserProfileProps {
  user: User;
}
const UserProfilePage: NextPage<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <h6>{user?.id}</h6>
      <h6>{user?.name}</h6>
      <h6>{user?.email}</h6>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //fetch user from API or DB
  const users = (await axios.get("http://localhost:3000/api/users")).data || [];
  const user = users.filter((u: { id: string }) => u.id == params?.id)[0];
  console.log(users, user);
  if (user) {
    return {
      props: { user: { ...user } }, // will be passed to the page component as props
      revalidate: false, // seconds or false: seconds to re-render the page
      notFound: false, // boolean to indicate if not-found page should be returned
    };
  }
  return {
    props: { user: {} },
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const users: { id: string; name: string; email: string }[] =
    (await axios.get("http://localhost:3000/api/users")).data || [];

  // Get the paths we want to pre-render based on posts
  const paths = users.map((user) => ({
    params: { id: user.id },
  }));

  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
};

export default UserProfilePage;
