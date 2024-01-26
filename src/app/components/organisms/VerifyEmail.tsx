import React, { useState } from "react";
import BackButton from "../atoms/BackButton";
import { useWizard } from "react-use-wizard";
import { useDispatch, useSelector } from "react-redux";
import { decrementStep, incrementStep } from "@/app/redux/slices/stepsSlice";
import EmailMolecule from "../molecules/Register/EmailMolecule";
import ButtonSubmit from "../atoms/ButtonSubmit";
import { RootState } from "@/app/redux/store";
import { validateEmail } from "@/regex/regexGlobal";
import { useToast } from "@/components/ui/use-toast";
import { addAttribue } from "@/app/redux/slices/registerSlice";
import { checkEmail } from "@/api/CheckEmail";

const VerifyEmail = () => {
  const { handleStep, previousStep, nextStep } = useWizard();
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const dispatch = useDispatch();
  const [errEmail, setErrEmail] = useState("");
  //api result
  const [result, setResult] = useState<string>("");
  const handleBack = () => {
    dispatch(decrementStep());
    previousStep();
  };
  const data = useSelector((state: RootState) => state.register);
  const [isloading, setisloading] = useState(false);
  const handleSubmit = async () => {
    if (validateEmail(email)) {
      setErrEmail("");
      setisloading(true);
      let result = await checkEmail({ email });
      setisloading(false);
      //handle result
      if (result.success) {
        if (result.success.message == "Email new") {
          //New email, send code
        } else if (result.success.message == "Email exit in registration") {
          //User has already got the code and the code still available
          toast({
            title: "We already sended you a code",
            description:
              "Please check you email , the code expires in one hour",
          });
        } else {
          //email is already exit , user should try another
          setErrEmail("Email is already exist please try another");
        }
      } else {
        //error
        toast({
          title: "Please check you internet connection",
          description: result.error,
          duration: 2000,
          variant: "destructive",
        });
      }
      // setisloading(true);
      // toast({
      //   title: "We sended you a verification code ",
      //   description: "Please enter the code",
      // });
      // dispatch(incrementStep());
      // dispatch(addAttribue({ ...data, email: email }));
      // nextStep();
    } else {
      setErrEmail("Invalid email form");
    }
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <EmailMolecule err={errEmail} setEmailState={setEmail} />
        <ButtonSubmit
          loading={isloading}
          title="Send verification code"
          disabled={email == "" ? true : false}
          action={handleSubmit}
        />
        <div className="pt-5">
          <BackButton action={handleBack} />
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
