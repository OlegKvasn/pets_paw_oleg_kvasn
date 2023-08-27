import axios from "axios";

const upload = async (file: File | null) => {
  if (!file) {
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("sub_id", "OlegTest");

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

    const data = res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
