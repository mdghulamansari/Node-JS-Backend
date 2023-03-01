import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://official-joke-api.appspot.com",
});

axiosInstance
  .get("/random_joke")
  .then((res) => {
    const { setup, punchline } = res.data;
    console.log(setup);
    setTimeout(() => console.log(punchline), 6000);
  })
  .catch((err) => console.log(err.message));
