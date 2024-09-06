import APP_HOST from "@/configs/envVariables";
import axios from "axios";

export const getUser = async (id: any) => {
  try {
    const response = await axios.get(`${APP_HOST}/api/user/${id}`);
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
