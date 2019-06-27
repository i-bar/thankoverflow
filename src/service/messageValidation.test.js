import { isInvalid } from "./messageValidation";
describe("Message Validation", () => {
  it('isInvalid("<some gibberish>") should return true', () => {
    expect(isInvalid("asdhjk ajsd asjh")).toEqual(true);
    expect(isInvalid("djklas")).toEqual(true);
    expect(isInvalid("SLDJHFLB")).toEqual(true);
  });
});
