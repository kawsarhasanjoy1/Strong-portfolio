import axios from "axios";

const IMAGE_KEY = "f337c110b42a910aa1975440be014f07";

const hostImage = async (image: File) => {
  console.log(image)
  const IMAGE_URL = `https://api.imgbb.com/1/upload?key=${IMAGE_KEY}`;

  const formData = new FormData();
  formData.append("image", image);

  try {
    const response = await axios.post(IMAGE_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.success) {
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Image Upload Error:", error);
    throw new Error("Failed to upload image to ImgBB");
  }
};

export default hostImage;
