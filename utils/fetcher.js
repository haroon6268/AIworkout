const fetcher = async (url = "", options = {}) => {
  const baseUrl = "https://aiworkout-nine.vercel.app";

  let res = await fetch(`${baseUrl}${url}`, { ...options });
  res = await res.json();
  return res;
};

export default fetcher;
