import axios from "axios";

export const singleSlugData = async (slug) => {
  try {
    if (typeof window !== "undefined") {
      const res = await axios.get(
        `https://file.kprmilllimited.com/wp-json/wp/v2/pages/?slug=${slug}`
      );
      return res.data;
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getReportTableData = async () => {
  try {
    if (typeof window !== "undefined") {
      const res = await axios.get(
        "https://file.kprmilllimited.com/wp-json/custom-api/v1/cfdb-submissions"
      );

      return res.data;
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

export const instance = () => {
  const data = axios.create({
    baseURL: "http://121.200.52.133:8003/api/",
  });

  data.interceptors.request.use(async function (config) {
    // config.headers['authorization'] = `Token ${accessToken}`;
    // const accessToken = localStorage.getItem("token");
    // if (accessToken) {
    //   config.headers["authorization"] = `Bearer ${accessToken}`;
    // }
    return config;
  });

  return data;
};
