module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return {
    ...item,
    enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20,
  };
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement >= 15) {
    if (item.enhancement > 16) {
      return {
        ...item,
        durability: item.durability - 10,
        enhancement: item.enhancement - 1,
      };
    }
    return { ...item, durability: item.durability - 10 };
  }
}

function repair(item) {
  if (
    !item ||
    typeof item.name === "undefined" ||
    typeof item.durability === "undefined" ||
    typeof item.enhancement === "undefined"
  ) {
    throw new error("item must have name, durability and enhancement");
  } else if (item.durability > 100 || item.durability < 0) {
    throw new error("durability must be from 1-100");
  } else if (item.enhancement > 20 || item.enhancement < 0) {
    throw new error("item enhancement must be from 1-20");
  }
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
