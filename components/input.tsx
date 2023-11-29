import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

const InputText = styled.input`
  width: 100%;
  padding: 10px 16px 10px 16px;
  border-radius: 6px;
  border: 1px solid #ddd;
  ::placeholder {
    color: #ddd;
  }
  &:focus {
    border-color: transparent;
    outline: 2px solid transparent;
    outline-color: #fd8d40;
    outline-width: 1px;
  }
`;

interface InputProps {
  type: string;
  register?: UseFormRegisterReturn;
  required?: boolean;
  placeholder?: string;
  [key: string]: any;
}
export default function Input({
  type,
  required,
  register,
  placeholder,
}: InputProps) {
  return (
    <InputText
      type={type}
      {...register}
      required={required}
      placeholder={placeholder}
    />
  );
}
