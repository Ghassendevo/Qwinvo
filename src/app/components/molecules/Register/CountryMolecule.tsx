import React from "react";
import Image from "next/image";
import { useWizard } from "react-use-wizard";
import { motion as m } from "framer-motion";
import { ChevronRight } from "lucide-react";
import france from "./../../../../assets/france.png";
import { useDispatch, useSelector } from "react-redux";
import { incrementStep } from "@/app/redux/slices/stepsSlice";
import { addAttribue } from "@/app/redux/slices/registerSlice";
import { RootState } from "@/app/redux/store";
type countryIT = {
  name: string;
  label?: string;
};

const CountryMolecule: React.FC<countryIT> = ({ name, label }) => {
  const { handleStep, previousStep, nextStep } = useWizard();
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.register);
  const handleCountry = () => {
      dispatch(addAttribue({...form,country:name}));
      dispatch(incrementStep());
      nextStep();
  };
  return (
    <m.div
      onClick={handleCountry}
      whileHover={{
        cursor: "pointer",
        border: "1px solid #494949",
        transition: { duration: 0.3 },
      }}
      className="country w-full border border-gray-100 shadow-sm text-black p-7 rounded-sm flex flex-row justify-between items-center"
    >
      <div className="flex flex-row gap-6 items-center">
        <Image src={france} alt="country" width={30} height={10} />
        <div>
          <p className="text-md font-quick">{name}</p>
          <p className="text-sm font-quick text-gray-700">{label}</p>
        </div>
      </div>
      <ChevronRight color="gray" />
    </m.div>
  );
};

export default CountryMolecule;
