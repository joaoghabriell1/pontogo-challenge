import { LOGIN_USER_MUTATION } from "../../../api/mutations";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useState } from "react";

function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [login, { loading }] = useMutation(LOGIN_USER_MUTATION);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      variables: {
        input: {
          identifier: inputs.email,
          password: inputs.password,
        },
      },
      onCompleted: ({ login }) => {
        localStorage.setItem("AUTH_TOKEN", login.jwt!);
        const role = login.user.role!.name;
        console.log(login);
        return;
        if (role === "admin") {
          navigate("/dashboard");
        }
        if (role === "user") {
          navigate("/meus-registros");
        }
      },
      onError: ({ networkError }) => {
        console.log(networkError);
      },
    });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">email</label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const { value, name } = e.currentTarget;
              setInputs((prev) => {
                return { ...prev, [name]: value };
              });
            }}
            name="email"
            value={inputs.email}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email">password</label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const { value, name } = e.currentTarget;
              setInputs((prev) => {
                return { ...prev, [name]: value };
              });
            }}
            name="password"
            value={inputs.password}
            type="text"
          />
        </div>
        <button>{loading ? "Connecting" : "login"}</button>
      </form>
    </>
  );
}

export default LoginForm;
