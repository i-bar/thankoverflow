import { isInvalid } from "./messageValidation";
describe("Message Validation", () => {
  it('isInvalid("<some gibberish>") should return true', () => {
    expect(isInvalid("asdhjk ajsd asjh")).toEqual(true);
    expect(isInvalid("djklas")).toEqual(true);
    expect(isInvalid("SLDJHFLB")).toEqual(true);
  });

  it('isInvalid("") should return true', () => {
    expect(isInvalid("")).toEqual(true);
  });

  it('isInvalid("<single punctuations>") should return true', () => {
    expect(isInvalid(".")).toEqual(true);
    expect(isInvalid(",")).toEqual(true);
    expect(isInvalid("?")).toEqual(true);
    expect(isInvalid("!")).toEqual(true);
    expect(isInvalid("..")).toEqual(true);
    expect(isInvalid("...")).toEqual(true);
    expect(isInvalid("..!@)#*&.")).toEqual(true);
  });

  it.only('isInvalid("<white spaces only>") should return true', () => {
    expect(isInvalid("    ")).toEqual(true);
    expect(isInvalid("\t")).toEqual(true);
    expect(isInvalid("\n")).toEqual(true);
    expect(isInvalid("\n\n")).toEqual(true);
  });

  it('isInvalid("some valid sentence.") should return false', () => {
    expect(isInvalid("this is a valid sentence.")).toEqual(false);
    expect(isInvalid("... this is also a valid sentence.")).toEqual(false);
    expect(isInvalid("!! i'm valid too!")).toEqual(false);
  });
});
