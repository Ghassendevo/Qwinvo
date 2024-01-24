import React from "react";
import Activity from "../molecules/Register/Activity";
import { useWizard } from "react-use-wizard";
import { ArrowLeftIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { decrementStep, incrementStep } from "@/app/redux/slices/stepsSlice";
import Back from "../atoms/BackButton";
import BackButton from "../atoms/BackButton";
import { addAttribue } from "@/app/redux/slices/registerSlice";
import { RootState } from "@/app/redux/store";

type activityIT = {
  acitivity: Array<{ name: string }>;
};

const ActivityItem: React.FC<activityIT> = ({ acitivity }) => {
  const { handleStep, previousStep, nextStep } = useWizard();
  const dispatch = useDispatch();
  const UserForm = useSelector((state: RootState) => state.register);
  const addReduxRegister = (value: string) => {
    dispatch(incrementStep(), addAttribue({ ...UserForm, acitivity: value }),nextStep());
  };
  const handleDispatch = () => {
    dispatch(decrementStep());
    previousStep()
  };
  return (
    <>
      {(acitivity &&
        acitivity.map((value, key) => (
          <Activity
            name={value.name}
            action={() => addReduxRegister(value.name)}
          />
        ))) ||
        "No Actitivity to select"}

      <div className="p-5 text-center">
        <BackButton action={handleDispatch} />
      </div>
    </>
  );
};

export default ActivityItem;
