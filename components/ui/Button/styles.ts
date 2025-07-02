import colors from "@/styles/variables/colors";
import type Sizes from "@/types/Sizes";
import { getResponsiveSize } from "@/utils/responsive";
import { Text } from "react-native";
import styled from "styled-components/native";
import type { Variants } from ".";
import { PRESSET_COLORS } from "./pressets/colors";
import { PRESSET_SIZES } from "./pressets/sizes";

interface StyledButtonProps {
  variant: Variants;
  size: Sizes;
}

export const StyledButton = styled.Pressable<StyledButtonProps>`
  background-color: ${({ variant }: StyledButtonProps) =>
    PRESSET_COLORS[variant]};
  border-radius: ${({ size }: StyledButtonProps) =>
    PRESSET_SIZES[size].border_radius};
  box-sizing: border-box;
  padding: ${({ size }: StyledButtonProps) => PRESSET_SIZES[size].padding};
  width: 100%;
  display: flex;
`;

export const ContentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${getResponsiveSize(8)};
`;

export const StyledText = styled(Text).attrs({
  numberOfLines: 1,
  ellipsizeMode: "tail",
})<StyledButtonProps>`
  color: ${({ variant }: StyledButtonProps) =>
    variant === "ghost" || variant === "secondary"
      ? colors.neutral[500]
      : colors.neutral[25]};
  font-size: ${({ size }: StyledButtonProps) => PRESSET_SIZES[size].font.size};
  line-height: ${({ size }: StyledButtonProps) =>
    PRESSET_SIZES[size].font.line_height};
  font-family: Inter_700Bold;
  text-align: center;
`;
