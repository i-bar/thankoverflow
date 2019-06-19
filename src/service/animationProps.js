export const getRandomDirection = () => {
  const randomFloat = Math.random();
  if (randomFloat <= 0.25) {
    return "left";
  } else if (randomFloat > 0.25 && randomFloat <= 0.5) {
    return "right";
  } else if (randomFloat > 0.5 && randomFloat <= 0.75) {
    return "top";
  } else {
    return "bottom";
  }
};
