import { getResponsiveSize } from "@/utils/responsive";
import styled from "styled-components/native";
import colors from "../variables/colors";

export const Title = styled.Text`
  color: ${colors.neutral[700]};
  font-family: Inter_800ExtraBold;
  font-size: ${getResponsiveSize(40)};
  width: 80%;
`;
