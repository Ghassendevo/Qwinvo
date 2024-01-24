import { RootState } from "@/app/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { inter,  } from "@/fonts/Fonts";
import { Inter } from "next/font/google";

const Title = styled.p.attrs<{ color?: string }>({
  
})`
  font-size: smaller;
  color: ${(props) => props.color};
  text-transform: capitalize;
`;
const StepTitle = ({
  stepTitle,
  active,
}: {
  stepTitle: string;
  active: Boolean;
}) => {
  return (
    <div>
      <Title color={(active && "black") || "#00000049"}>{stepTitle}</Title>
    </div>
  );
};

export default StepTitle;
