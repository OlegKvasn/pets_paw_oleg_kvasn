import axios from "axios";
import { getErrorMessage } from "./getErrorMessage";

const upload = async (file: File | null) => {
  if (!file) {
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("sub_id", "OlegTest");

  let data;

  try {
    const res = await axios.post(
      "https://api.thecatapi.com/v1/images/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-api-key": `live_xkmTWHDiWCfoRWZ76onuP8ygd7eAQV89obHlrIIL0Ec3bo2WCUAnSptpeVW9Eq8Y`,
        },
      }
    );

    data = res.data;
  } catch (err) {
    console.log(err);
    return {
      error: getErrorMessage(err),
    };
  }

  return data;
};

export default upload;
