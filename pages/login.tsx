import React from "react";

const LoginPage = () => {
  return <div>Login Page</div>;
};

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
  return <>{page}</>;
};

export default LoginPage;
