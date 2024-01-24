"use client";
import React from "react";
import StepMolecule from "../molecules/steps/StepMolecule";
import { Progress } from "@nextui-org/react";

const STEPS = [
  {
    stepTitle: "step 1",
    stepLabel: "Select country",
  },
  {
    stepTitle: "step 2",
    stepLabel: "create account",
  },
  {
    stepTitle: "step 3",
    stepLabel: "verify phone number",
  },
  {
    stepTitle: "step 4",
    stepLabel: "Finish",
  },
];
const Stepper = () => {
  return (
    <div className="bg-white border-r h-screen  ">
      <StepMolecule steps={STEPS} />
    </div>
  );
};

export default Stepper;
