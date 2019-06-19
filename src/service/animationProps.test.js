import { getRandomDirection } from "./animationProps";

describe("Values for react-particle-effect-button props", () => {
  it("getRandomDirection() should return left/right/top/bottom randomly", () => {
    const possibleDirections = ["left", "right", "top", "bottom"];
    const randomDirections = Array(100)
      .fill()
      .map(_ => getRandomDirection());

    expect(new Set(randomDirections)).toEqual(new Set(possibleDirections));
  });
});
