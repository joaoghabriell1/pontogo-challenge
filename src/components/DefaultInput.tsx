import { Input, FormLabel } from "@chakra-ui/react";

interface Props {
  value: string;
  label: string;
  placeHolder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefaultInput = ({ value, name, placeHolder, label, onChange }: Props) => {
  return (
    <>
      <FormLabel mb="0" htmlFor="email">
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
        type="text"
      />
    </>
  );
};

export default DefaultInput;
