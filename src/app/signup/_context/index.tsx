import APP_HOST from "@/configs/envVariables";
import axios from "axios";

export const signup = async (data: any) => {
  const userData = {
    name: data.name,
    email: data.email,
    password: data.password,
    family_members: "",
    ration_card: "",
    ghar_no: "",
    address: "",
    phone_number: "",
    is_admin: false,
  };
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      `${APP_HOST}/api/user/signup`,
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
