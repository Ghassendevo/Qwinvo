import { Input } from "@nextui-org/react";
import React, { Dispatch, SetStateAction } from "react";
import Labelinput from "./LabelInput";
import { MailIcon, MailQuestion } from "lucide-react";
import emailanim from "../../../assets/email-ezgif.com-loop-count.gif";
import Image from "next/image";
import { IEmail } from "@/interfaces/IEmail";
import { validateEmail } from "@/regex/regexGlobal";
const EmailInput: React.FC<IEmail> = ({
  type,
  placeholder,
  setEmailState,
  err,
}) => {
  const handleOnChange = (e: string) => {
    
    setEmailState(e);
  };
  return (
    <Input
      onChange={(e) => handleOnChange(e.target.value)}
      label={<Labelinput value="Email" />}
      labelPlacement="outside"
      type="email"
      variant="bordered"
      isInvalid={err ? true : false}
      errorMessage={err ? err : null}
      description="We'll never share your email with anyone else."
      size="lg"
      startContent={<Image src={emailanim} width={25} alt="email anim " />}
      radius="sm"
      placeholder="ghassenab@qwinvo.com"
      fullWidth
    />
  );
};

export default EmailInput;
