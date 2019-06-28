export const anyMatches = tensorflowResults => {
  const matches = tensorflowResults.map(label => {
    return label.results[0].match;
  });
  return matches.some(bool => bool);
};
