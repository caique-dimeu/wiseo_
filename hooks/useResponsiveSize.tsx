import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const BASE_WIDTH = 384;
const BASE_HEIGHT = 808;

export const useResponsiveSize = () => {
  const [scaleFactor, setScaleFactor] = useState({ scaleX: 1, scaleY: 1 });
  const [ready, setReady] = useState(false);

  const updateScaleFactor = () => {
    const { width, height } = Dimensions.get("window");
    setScaleFactor({
      scaleX: width / BASE_WIDTH,
      scaleY: height / BASE_HEIGHT,
    });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <errado>
  useEffect(() => {
    updateScaleFactor();
    setReady(true);
    Dimensions.addEventListener("change", updateScaleFactor);
  }, []);

  const getSize = (size: number) => size * scaleFactor.scaleX;

  return { getSize, ready };
};
