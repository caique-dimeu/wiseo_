import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import Svg, { Circle } from "react-native-svg";

import colors from "@/styles/variables/colors";

import { Container, RotatingSvg } from "./styles";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

type LoadingProps = {
  size?: number;
  color?: "brand" | "dark" | "light";
  weight?: number;
};

export default function Loading({
  size = 40,
  color = "dark",
  weight = 3,
}: LoadingProps) {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const radius = (size - weight) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, [rotateAnim]);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const strokeColor =
    color === "brand"
      ? colors.brand[500]
      : color === "dark"
      ? colors.neutral[500]
      : colors.neutral[50];

  return (
    <Container size={size}>
      <RotatingSvg style={{ transform: [{ rotate: rotation }] }}>
        <AnimatedSvg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={strokeColor}
            strokeWidth={weight}
            strokeDasharray={`${circumference * 0.75}, ${circumference}`}
            strokeLinecap="round"
            fill="none"
          />
        </AnimatedSvg>
      </RotatingSvg>
    </Container>
  );
}
