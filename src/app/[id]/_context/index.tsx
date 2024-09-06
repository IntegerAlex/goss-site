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

export const getAllUsers = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(`${APP_HOST}/api/user/allusers`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMember = async (id: any) => {
  const deleteMember = {
    id: id,
  };
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      `${APP_HOST}/api/user/delete`,
      JSON.stringify(deleteMember),
      {
        headers,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
