import React from "react";
import StepTitle from "../../atoms/steps/StepTitle";
import StepLabel from "../../atoms/steps/StepLabel";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
type StepType = {
  stepTitle: string;
  stepLabel: string;
};
const StepMolecule = ({ steps }: { steps: Array<StepType> }) => {
  const isactive = useSelector((state: RootState) => state.step.activeStep);
  return (
    <div className="flex flex-col gap-0">
      {steps.map((value, key) => {
        return (
          <div
            className={`flex justify-center after:transition after:ease-[ease] after:duration-500 ${
              isactive == key + 1 &&
              "border-r-green-600 border-r-[2px] shadow-sm after:transition after:ease-[ease] after:duration-500 "
            } `}
          >
            <div
              className={["flex flex-col gap-0 justify-center p-5 w-48"].join(
                " "
              )}
            >
              <StepTitle
                active={isactive == key + 1}
                stepTitle={value.stepTitle}
              />
              <StepLabel
                active={isactive == key + 1}
                stepLabel={value.stepLabel}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepMolecule;
