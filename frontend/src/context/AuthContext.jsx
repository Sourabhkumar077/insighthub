import { useEffect, useState } from "react";
import { getMe } from "../services/authService.js";

// creating the context
import { createContext } from "react";
export const AuthContext = createContext();

// provider 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1- auto login after refresh
  useEffect(() => {
    //useEffect trigger after every page refresh

    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const data = await getMe(token); // using service - getme to fetch the user login info
        console.log(data);
      } catch (error) {
        localStorage.removeItem("token");
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const loginUser = (data) => {
    setUser(data.user);
    localStorage.setItem("token", data.token);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
