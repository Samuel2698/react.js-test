import useGif from "../hooks/useGif";

const Otro = () => {
  const { gif } = useGif({ fact: "" });

  return (
    <>
      {gif && (
        <img
          src={gif}
          alt={`Image extracted from the first two words of: ${fact}`}
        />
      )}
    </>
  );
};

export default Otro;
