import words from "../data/words";

const generateWord = () => {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
};



export { generateWord };
