import React, { Dispatch, SetStateAction } from "react";
import Labelinput from "../../atoms/LabelInput";
import EmailInput from "../../atoms/EmailInput";
import { IEmail } from "@/interfaces/IEmail";
const EmailMolecule: React.FC<IEmail> = ({ setEmailState, placeholder,err }) => {
  return (
    <div className="flex flex-col w-full  gap-1.5">
      <EmailInput
        setEmailState={setEmailState}
        err={err}
        type="email"
        placeholder={placeholder ? placeholder : "Email"}
      />
    </div>
  );
};

export default EmailMolecule;
