import axios from "axios";

const API_URL = "https://api.adviceslip.com/advice";

const fetchAdvice = async () => {
  try {
    const data = await axios.get(API_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAdvice;
