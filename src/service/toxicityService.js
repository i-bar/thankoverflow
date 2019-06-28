import * as toxicity from "@tensorflow-models/toxicity";
import { anyMatches } from "./tensorflowResultsParser";

export const isToxic = async sentence => {
  return anyMatches(await _predictToxicity(sentence));
};

export const _predictToxicity = sentence => {
  const threshold = 0.9;

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

  return toxicity.load(threshold, labelsToInclude).then(model => {
    return model.classify([sentence]).then(predictions => {
      return predictions;
    });
  });
};
