import { Dispatch, SetStateAction } from "react";

export interface IEmail {
  type?: string;
  setEmailState: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  err?: string;
}
