import { Flex, FormControl, Button } from "@chakra-ui/react";
import { LOGIN_USER_MUTATION } from "../../../api/mutations";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useState } from "react";

import DefaultInput from "../../../components/DefaultInput";
import PasswordInput from "./PasswordInput";
import FormHeading from "./Heading";

function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [login, { loading, error }] = useMutation(LOGIN_USER_MUTATION);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
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
      <Flex
        sx={{
          form: { maxW: "25rem", ml: "8rem" },
        }}
        justify="center"
        direction="column"
        flexBasis="100%"
      >
        <form onSubmit={handleLogin}>
          <FormHeading />
          <FormControl mb="1.25rem" as="fieldset">
            <DefaultInput
              label="Email"
              placeHolder="exemplo@email.com"
              name="email"
              value={inputs.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mb="1.8rem">
            <PasswordInput
              label="Senha"
              placeHolder="*********"
              name="password"
              value={inputs.password}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button
            type="submit"
            bg="main-color"
            fontWeight="500"
            color="pure-white"
            width="100%"
            _hover={{ bg: "main-color", opacity: ".8" }}
          >
            {loading ? "Connecting" : "Entrar"}
          </Button>
        </form>
      </Flex>
    </>
  );
}

export default LoginForm;
