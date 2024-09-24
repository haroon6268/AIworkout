const fetcher = async (url = "", options = {}) => {
  const baseUrl = "https://aiworkout-nine.vercel.app";
  const devUrl = "http://localhost:3000";

  let res = await fetch(`${devUrl}${url}`, { ...options });
  res = await res.json();
  return res;
};

export default fetcher;
