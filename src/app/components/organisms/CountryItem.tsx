import React from "react";
import { motion as m } from "framer-motion";
import france from "../../../assets/france.png";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useWizard,Wizard } from "react-use-wizard";
import CountryMolecule from "../molecules/Register/CountryMolecule";

type countryIT = {
  countries?: Array<{ name: string; label: string }>;
};

const CountryItem: React.FC<countryIT> = ({ countries }) => {
  const { handleStep, previousStep, nextStep } = useWizard();
  return (
    (countries &&
      countries.map((value, key) => (
       <CountryMolecule name={value.name} label={value.label} />
      ))) ||
    "No country to select"
  );
};

export default CountryItem;

