import axios from "axios";


const params = {
  headers: {
    Authorization: "bearer " + `2ac0b226604154cbe6cd0d722884765a7a5841d8c1130aee24355d4e61c561dc0413adc1572be2972c4d33d4e2dafff918cf87afc3a172fe1533f54af871072f6c6fbe70d0f01fe6efe2c4d02b900cae0b48181ec0a521c1f3809841086c391e430b0e36408b6ed1af41143c04c10900c85070780535d4cf8573d00509427080`,
  },
};


const fetchApi = async(url) => {
  try {
    const res = await axios.get("http://localhost:1337" + url, params);
   
      return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchApi;

export const paymentRequest = axios.create({
   baseUrl:"http://localhost:1337",
   headers: {
    Authorization: "bearer " + `2ac0b226604154cbe6cd0d722884765a7a5841d8c1130aee24355d4e61c561dc0413adc1572be2972c4d33d4e2dafff918cf87afc3a172fe1533f54af871072f6c6fbe70d0f01fe6efe2c4d02b900cae0b48181ec0a521c1f3809841086c391e430b0e36408b6ed1af41143c04c10900c85070780535d4cf8573d00509427080`,
  },
})