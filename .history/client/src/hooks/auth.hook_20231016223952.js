import { useState, useEffect } from "react";
export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const login = usec
  const logOut = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data && data.token) {
      login(data.token, data.userId);
    }
    setIsReady(true);
  }, [login]);
};
