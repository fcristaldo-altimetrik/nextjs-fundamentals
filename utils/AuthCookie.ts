export const getCookieByName = (cookies: string[], cookieName: string) => {
  return (
    cookies
      .filter((cookie) => {
        if (cookie.split("=")[0] == cookieName) {
          return true;
        }
        return false;
      })[0]
      ?.split("=")[1] || ""
  );
};
