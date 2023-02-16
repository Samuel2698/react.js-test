import { useEffect, useState } from "react";
import { getFact } from "../services/fact";

const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getFact().then((newFact) => setFact(newFact));
  };

  useEffect(refreshFact, []);

  return { fact, refreshFact };
};

export default useCatFact;
