import isGibberish from "asdfjkl";

export const isInvalid = sentence => {
  const trimmedSentence = sentence.trim();

  const containsAlphabets = Boolean(trimmedSentence.match(/[a-zA-Z]+/));
  if (!containsAlphabets) return true;
  return isGibberish(trimmedSentence);
};
