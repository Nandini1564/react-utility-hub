import axios from "axios";

export const translateText = async (text, target = "te") => {
  try {
    const options = {
      method: "POST",
      url: "https://google-api31.p.rapidapi.com/google/translate",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
      },
      data: {
        text,
        to: target,
      },
    };

    const response = await axios.request(options);

    return (
      response.data.translatedText ||
      response.data.translation ||
      "Translation failed"
    );
  } catch (error) {
    console.error(error);
    return "API Error";
  }
};