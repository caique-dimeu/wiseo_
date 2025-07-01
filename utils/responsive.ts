import { Dimensions } from "react-native";

const BASE_WIDTH = 384;
const BASE_HEIGHT = 808;

let scaleFactor = {
  scaleX: Dimensions.get("window").width / BASE_WIDTH,
  scaleY: Dimensions.get("window").height / BASE_HEIGHT,
};

Dimensions.addEventListener("change", () => {
  const { width, height } = Dimensions.get("window");
  scaleFactor = {
    scaleX: width / BASE_WIDTH,
    scaleY: height / BASE_HEIGHT,
  };
});

export const getResponsiveSize = (size: number) => {
  return `${size * scaleFactor.scaleX}px`;
};
