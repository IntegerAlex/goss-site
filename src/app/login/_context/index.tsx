import APP_HOST from "@/configs/envVariables";
import axios from "axios";

export const login = async (data: any) => {
  const userData = {
    email: data.email,
    password: data.password,
  };
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      `${APP_HOST}/api/user/login`,
      JSON.stringify(userData),
      {
        headers,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
