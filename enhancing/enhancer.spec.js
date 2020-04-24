const enhancer = require("./enhancer.js");
// test away!

describe("repair()  tests", function () {
  it("should return object with -durability- property = 100 ", function () {
    const item1Damaged = {
      name: "stormDaemon",
      durability: 50,
      enhancement: 20,
    };

    const item1Repaired = {
      name: "stormDaemon",
      durability: 100,
      enhancement: 20,
    };

    const item2Damaged = {
      name: "plagueClawCatapult",
      durability: 40,
      enhancement: 20,
    };

    const item2Repaired = {
      name: "plagueClawCatapult",
      durability: 100,
      enhancement: 20,
    };

    expect(enhancer.repair(item1Damaged)).toStrictEqual(item1Repaired);
    expect(enhancer.repair(item2Damaged)).toStrictEqual(item2Repaired);
    expect(enhancer.repair(item1Repaired)).toStrictEqual(item1Repaired);
  });
  it("should throw error when not given a proper object", function () {
    const brokenObject = {
      name: "warpFireThrower",
      enhancement: 20,
    };
    expect(() => enhancer.repair(brokenObject)).toThrow();
  });

  it("should throw error if durability isnt 1-100", function () {
    const brokenDurability = {
      name: "warpFireThrower",
      enhancement: 20,
      durability: 101,
    };
    expect(() => enhancer.repair(brokenDurability)).toThrow();
  });

  it("should throw error if enhancement isnt 1-20", function () {
    const brokenEnhancement = {
      name: "warpFireThrower",
      enhancement: 22,
      durability: 100,
    };

    expect(() => enhancer.repair(brokenEnhancement)).toThrow();
  });
});

describe("succeed() tests", function () {
  it("should add 1 to enhancement if its less than 20", function () {
    const enhancement18 = {
      name: "warpFireThrower",
      enhancement: 18,
      durability: 100,
    };

    const enhancement19 = {
      name: "warpFireThrower",
      enhancement: 19,
      durability: 100,
    };
    expect(enhancer.succeed(enhancement18)).toStrictEqual(enhancement19);
  });
});
