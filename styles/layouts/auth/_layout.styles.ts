import colors from "@/styles/variables/colors";
import { getResponsiveSize } from "@/utils/responsive";
import styled from "styled-components/native";

export const AuthContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  color: ${colors.neutral[700]};
  font-family: Inter_800ExtraBold;
  font-size: ${getResponsiveSize(40)};
  width: 60%;
`;

export const Subtitle = styled.Text`
  font-family: Inter_500Medium;
  color: ${colors.neutral[600]};
  line-height: ${getResponsiveSize(24)};
  font-size: ${getResponsiveSize(16)};
  padding-top: ${getResponsiveSize(16)};
  padding-bottom: ${getResponsiveSize(64)};
`;
