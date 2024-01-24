import { RootState } from "@/app/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Label = styled.p<{ color: string }>`
  font-size: small;
  color: ${(props) => props.color};
  text-transform: capitalize;
`;
const StepLabel = ({
  stepLabel,
  active,
}: {
  stepLabel: string;
  active: boolean;
}) => {
  return <Label color={(active && "#868181") || "#bebebe"}>{stepLabel}</Label>;
};

export default StepLabel;
