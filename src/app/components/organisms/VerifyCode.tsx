import React, { useState } from "react";
import ReactInputVerificationCode from "react-input-verification-code";
import ButtonSubmit from "../atoms/ButtonSubmit";
import { containsCharacter } from "@/regex/regexGlobal";
import BackButton from "../atoms/BackButton";
import { useWizard } from "react-use-wizard";
import { MailWarning } from "lucide-react";
import { dataFocusVisibleClasses } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [iscodeNotEmpty, setiscodeNotEmpty] = useState(false);
  const [islaoding, setisloading] = useState(false);
  const data = useSelector((state: RootState) => state.register);
  const handleCodeChange = (e: string) => {};
  const handleSubmit = () => {
    setisloading(true);
  };
  const { handleStep, previousStep, nextStep } = useWizard();

  return (
    <div className="flex flex-col gap-6">
      <div className="custom-styles">
        <ReactInputVerificationCode
          type="text"
          onChange={(e) => setCode(e)}
          autoFocus
          length={6}
        />
      </div>
      <div className="flex flex-col gap-5 items-start">
        <p className="text-sm text-gray-500 flex flex-row gap-2 items-center">
          <MailWarning color="green" size={10} /> Sometimes the code appears in
          the spam.
        </p>
        <p  className="text-sm">
          Didn't get the code? <a href="" className="font-semibold hover:underline"> Click to resend</a>
        </p>
        <div className="w-fit flex flex-row gap-4 items-center">
          <ButtonSubmit
            loading={islaoding}
            disabled={containsCharacter(code)}
            action={handleSubmit}
            title="continue"
          />
          <p>or</p>
          <BackButton action={previousStep} />
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
