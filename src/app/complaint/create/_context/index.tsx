import APP_HOST from "@/configs/envVariables";
import axios from "axios";

const registerComplaint = async (data: any) => {
  const complaintDetails = {
    title: data.title,
    description: data.description,
    images: [""],
    comments: [
      {
        comment: "",
        commentator: "",
      },
    ],
    action_taken: {
      images: [""],
      description: "",
    },
  };
  console.log(complaintDetails);

  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      `${APP_HOST}/api/complaint/create`,
      JSON.stringify(complaintDetails),
      { headers }
    );
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export default registerComplaint;
