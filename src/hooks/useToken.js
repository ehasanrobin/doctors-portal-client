import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user.email;
    const currentUser = { email: email };

    if (email) {
      fetch(`https://doctors-portal-server-10001.herokuapp.com/user/${email}`, {
        method: "PUT", // Method itself
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(currentUser), // We send data in JSON format
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data.token;
          localStorage.setItem("accessToken", token);
          setToken(token);
        });
    }
  }, [user]);

  return token;
};

export default useToken;
