import axios from "axios";
import { Dispatch, SetStateAction } from "react";

interface ICheckemail {
  email: string;
  setLoading?: Dispatch<SetStateAction<boolean>>;
  setResult: Dispatch<SetStateAction<string>>;
}
export const checkEmail  = ({email,setLoading,setResult}:ICheckemail) => {
  axios
    .get(`http://127.0.0.1:5000/CheckEmail?email=${email}`)
    .then((response) => {
      setLoading && setLoading(true);
    })
    .catch((error) => {
      setResult(`Error: ${error.message}`);
    });
};
