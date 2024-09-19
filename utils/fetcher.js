const fetcher = async (url = "", options = {}) => {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  let res = await fetch(`${baseUrl}${url}`, { ...options });
  res = await res.json();
  return res;
};

export default fetcher;
