import isGibberish from "asdfjkl";

export const isInvalid = sentence => {
  return isGibberish(sentence);
};
