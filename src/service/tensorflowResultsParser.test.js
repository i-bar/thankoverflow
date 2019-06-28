import { anyMatches } from "./tensorflowResultsParser";

describe("Toxicity prediction", () => {
  it("anyMatches should return true when there is any match that is true", () => {
    const tensorflowResults = [
      {
        label: "identity_attack",
        results: [{ probabilities: [], match: false }]
      },
      {
        label: "identity",
        results: [{ probabilities: [], match: true }]
      }
    ];

    expect(anyMatches(tensorflowResults)).toEqual(true);
  });

  it("anyMatches should return false when there is all matches are false", () => {
    const tensorflowResults = [
      {
        label: "identity_attack",
        results: [{ probabilities: [], match: false }]
      },
      {
        label: "identity",
        results: [{ probabilities: [], match: false }]
      }
    ];

    expect(anyMatches(tensorflowResults)).toEqual(false);
  });

  it("anyMatches should return false when there is all matches are null", () => {
    const tensorflowResults = [
      {
        label: "identity_attack",
        results: [{ probabilities: [], match: null }]
      },
      {
        label: "identity",
        results: [{ probabilities: [], match: null }]
      }
    ];

    expect(anyMatches(tensorflowResults)).toEqual(false);
  });
});
