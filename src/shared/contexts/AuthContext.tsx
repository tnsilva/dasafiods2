import { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextData {
  signed: boolean;
  onLogin: (email: string, password: string) => Promise<any>;
  onLogout: () => Promise<any>;
}

interface UserProps {
  id: string;
  email: string;
  pwd: string;
  role: string;
  token: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserProps[]>([
    {
      id: "1",
      email: "a@gmail.com",
      pwd: "1234",
      role: "admin",
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0NzU2OTgwMCwiaWF0IjoxNjQ3NTY5ODAwfQ.ddk8HKr4F20RZ4qdjsJ9qOf4h3KtAKFsN7Ldozolppg",
    },
    {
      id: "2",
      email: "b@gmail.com",
      pwd: "1234",
      role: "user",
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0NzU2OTgwMCwiaWF0IjoxNjQ3NTY5ODAwfQ.jVjdEqPbYKnOB4S0tuaQsJ_QPND8vgnweBtthTij5Yo",
    },
    {
      id: "3",
      email: "c@gmail.com",
      pwd: "1234",
      role: "admin",
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0NzU2OTgwMCwiaWF0IjoxNjQ3NTY5ODAwfQ.2P6Y3G2aHLFhFaICjzP2-1hZkibEw5i0v2sKzz-oy6I",
    },
  ]);

  const [signed, setSigned] = useState(!localStorage.getItem("token"));

  const onLogin = useCallback(async (email: string, password: string) => {
    try {
      if (signed) {
        alert("Já logado: " + signed);
        return;
      }

      const user = users.filter(
        (user) => user.email === email && user.pwd === password
      );

      const token = users.filter((user) => user.token).toString();

      if (user.length > 0) {
        alert(email + ": logado");
        setSigned(true);
        localStorage.setItem("token", email);
        navigate("/");
      } else {
        alert("Email ou senha não confere.");
        setSigned(false);
        localStorage.removeItem("token");
      }
    } catch (err) {
      return err;
    }
  }, []);

  const onLogout = useCallback(async () => {
    setSigned(false);
    localStorage.removeItem("token");
    navigate("/");
  }, []);

  return (
    <AuthContext.Provider value={{ signed, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
