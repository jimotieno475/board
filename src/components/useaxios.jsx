import axios from 'axios';

const baseUrl = "http://127.0.0.1:5555";

const useaxios = () => {
  const request = async ({
    url = "/",
    data = {},
    headers = {},
    params = {},
    method = ""
  }) => {
    try {
      const res = await axios({
        url: `${baseUrl}/${url}`,
        method: method,
        data: data,
        headers: { ...headers, "Content-Type": "application/json","Access-Control-Allow-Origin": "http://localhost:3000", },
        params: params
      });
      return res.data;
    } catch (e) {
      return "error";
    }
  };

  return request;
};

export default useaxios;
