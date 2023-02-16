import { useEffect, useState } from "react";
import { getGif } from "../services/gif";

const useGif = ({ fact }) => {
  const [gif, setGif] = useState();

  useEffect(() => {
    if (!fact) return;

    const firstTwoWords = fact.split(" ", 3).join(" ");
    console.log(firstTwoWords);

    getGif({ firstTwoWords }).then((newGif) => setGif(newGif));
  }, [fact]);

  return { gif };
};

export default useGif;
