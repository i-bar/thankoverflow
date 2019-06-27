import isGibberish from "asdfjkl";

export const isInvalid = sentence => {
  const trimmedSentence = sentence.trim();

  const containsAlphabets = Boolean(trimmedSentence.match(/[a-zA-Z]+/));
  if (!containsAlphabets) return true;
  return isGibberish(trimmedSentence);
};

export const hasNegativeSentiment = async sentence => {
  try {
    const response = await fetch("/api/predict-sentiment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: sentence })
    });
    const body = await response.json();
    const sentiment = body[0].sentiment;

    if (sentiment < 0) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};
