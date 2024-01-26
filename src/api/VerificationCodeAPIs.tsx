import axios from "axios";
export const sendCodeAPi = async(destination: string) => {
    try {
        const response = await axios.get(
          `http://127.0.0.1:5000/sendCode?destination=${destination}`
        );
        console.log(response.data)
        return { success: response.data };
      } catch (error: any) {
        return { error: error.message };
      }
};

const verifyCodeAPi = (code: string) => {};
