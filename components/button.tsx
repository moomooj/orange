import styled from "styled-components";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  [key: string]: any;
}

const ButtonDiv = styled.button`
  background-color: #fd8d40;
  width: 100%;
  padding: 10px 16px 10px 16px;
  color: #fff;
  font-size: 16px;
  border-width: 1px;
  border-radius: 6px;
  border-color: transparent;
  &:hover {
    background-color: #fdb88a;
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    outline-color: #fd8d40;
    outline-width: 2px;
  }
  &:disabled {
    background-color: #fff;
    outline: 1px solid #ddd;
    color: #ddd;
  }
`;

export default function Button({
  text,
  onClick,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <ButtonDiv {...rest} disabled={disabled}>
      {text}
    </ButtonDiv>
  );
}
