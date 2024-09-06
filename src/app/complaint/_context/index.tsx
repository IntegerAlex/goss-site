import APP_HOST from "@/configs/envVariables";
import axios from "axios";

export const getComplaints = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.get(
      `${APP_HOST}/api/complaint/allcomplaints`,
      {
        headers,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
