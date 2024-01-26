import axios from "axios";
import { Dispatch, SetStateAction } from "react";

interface ICheckemail {
  email: string;
  setLoading?: Dispatch<SetStateAction<boolean>>;
  setResult?: Dispatch<SetStateAction<string>>;
}
export const checkEmail = async ({
  email,
  setLoading,
  setResult,
}: ICheckemail) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:5000/checkEmail?email=${email}`
    );
    console.log(response.data)
    return { success: response.data };
  } catch (error: any) {
    return { error: error.message };
  }
};
