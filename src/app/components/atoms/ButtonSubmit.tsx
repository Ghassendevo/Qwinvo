import React from "react";
import styled from "styled-components";
import { Spinner } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
const BtnSubmit = styled.button.attrs({
  className: "fontbase",
})`
  background-color: black;
  width: 100%;
  padding: 10px;
  height: 50px;
  font-size: 15px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  opacity: 0.3;
  &:hover {
    background-color: #000000c9;
  }
`;
interface IButton {
  action: () => void;
  loading?: boolean;
  title: string;
  disabled?: boolean;
  width?: string;
}
const ButtonSubmit: React.FC<IButton> = ({
  loading,
  disabled,
  title,
  action,
  width,
}) => {
  return (
    <Button
      onClick={action}
      color="primary"
      size="lg"
      disabled={loading || disabled}
      className={` text-md ${
        width ? "w-[" + width + "]" : "w-full"
      } text-sm font-light  fontbase`}
    >
      {(loading && <Spinner size="sm" color="white" />) || title}
    </Button>
  );
};

export default ButtonSubmit;
