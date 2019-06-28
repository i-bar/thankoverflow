import * as toxicity from "@tensorflow-models/toxicity";
import { anyMatches } from "./tensorflowResultsParser";

export const isToxic = async sentence => {
  return anyMatches(await _predictToxicity(sentence));
};

export const _predictToxicity = sentence => {
  const THRESHOLD = 0.5;

  // Which toxicity labels to return.
  const labelsToInclude = [
    "toxicity",
    "severe_toxicity",
    "identity_attack",
    "insult",
    "threat",
    "sexual_explicit",
    "obscene"
  ];

  return toxicity.load(THRESHOLD, labelsToInclude).then(model => {
    return model.classify([sentence]).then(predictions => {
      console.log("=== probability of negative sentiment: === ");
      predictions.forEach(prediction => {
        console.log(
          `${prediction.label}: ${prediction.results[0].probabilities[1]}`
        );
      });
      return predictions;
    });
  });
};
