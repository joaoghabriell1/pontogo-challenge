import { Input, Image, FormLabel, Link, Box } from "@chakra-ui/react";
import EyeIcon from "../../../assets/icon-eye.svg";
import { useState } from "react";

interface Props {
  value: string;
  placeHolder: string;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({
  value,
  name,
  label,
  placeHolder,
  onChange,
}: Props) => {
  return (
    <>
      <Box mb=".5rem" position="relative">
        <FormLabel mb="0" htmlFor="password">
          {label}
        </FormLabel>
        <Input
          required
          borderRadius=" 0.3125rem"
          border="1px solid rgba(32, 41, 46, 0.30)"
          _placeholder={{ fontSize: "sm" }}
          placeholder={placeHolder}
          onChange={onChange}
          name={name}
          value={value}
          type="password"
        />
        <Image top="2.2rem" right=".5rem" position="absolute" src={EyeIcon} />
      </Box>
      <Link fontSize="0.93rem" color="main-color" textDecoration="underline">
        Esqueci minha senha
      </Link>
    </>
  );
};

export default PasswordInput;
