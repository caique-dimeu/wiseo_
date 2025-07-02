import styled from "styled-components/native";

import { getResponsiveSize } from "@/utils/responsive";
import colors from "../variables/colors";

export const MainLayout = styled.View`
  flex: 1;
  padding: ${getResponsiveSize(32)};
`;

export const HelpText = styled.Text`
  font-family: Inter_500Medium;
  color: ${colors.neutral[600]};
  font-size: ${getResponsiveSize(12)};
  line-height: ${getResponsiveSize(16)};
`;

export const Regular = styled.Text`
  font-family: Inter_400Regular;
  color: ${colors.neutral[400]};
  font-size: ${getResponsiveSize(16)};
  line-height: ${getResponsiveSize(24)};
  margin-top: ${getResponsiveSize(8)};
  margin-bottom: ${getResponsiveSize(8)};
`;
