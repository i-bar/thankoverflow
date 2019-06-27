import isGibberish from "asdfjkl";

export const isInvalid = sentence => {
  if (sentence.length === 0) return true;
  return isGibberish(sentence);
};
