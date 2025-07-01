import styled from "styled-components/native";
import { Animated } from "react-native";

type ContainerProps = {
  size: number;
};

export const Container = styled.View<ContainerProps>`
  width: ${({ size }: ContainerProps) => size}px;
  height: ${({ size }: ContainerProps) => size}px;
`;

export const RotatingSvg = styled(Animated.View)`
  justify-content: center;
  align-items: center;
`;
