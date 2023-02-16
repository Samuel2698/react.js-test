const API_KEY = "lr8qrEPPqss6gxYCcY4hFRrQ0dJy3cuO";

export async function getGif({ firstTwoWords }) {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${firstTwoWords}&limit=1&offset=0&rating=g&lang=en`
  );
  const data = await res.json();
  return data.data[0].images.downsized_medium.url;
}
