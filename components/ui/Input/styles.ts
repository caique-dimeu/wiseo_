import styled from "styled-components/native";

import colors from "@/styles/variables/colors";
import type Sizes from "@/types/Sizes";
import { getResponsiveSize } from "@/utils/responsive";

import type { InputStatus } from ".";
import { PRESSET_SIZES } from "./pressets/sizes";

// Propriedades usadas pelo Container
interface InputContainerProps {
  status: InputStatus;
  size: Sizes;
  isFocused: boolean;
}

interface StyledInputProps {
  status: InputStatus;
  size: Sizes;
}

const getBorder = (status: InputStatus, isFocused: boolean): string => {
  const prefix = "1px solid";

  if (status === "default")
    return `${prefix} ${isFocused ? colors.neutral[400] : "transparent"}`;
  if (status === "danger")
    return `${prefix} ${isFocused ? colors.danger[500] : colors.danger[100]}`;
  if (status === "success")
    return `${prefix} ${isFocused ? colors.success[500] : colors.success[100]}`;
  if (status === "warning")
    return `${prefix} ${isFocused ? colors.warning[400] : colors.warning[100]}`;

  return "none";
};

export const InputContainer = styled.View<InputContainerProps>`
  flex-direction: row;
  background-color: ${colors.neutral[25]};
  align-items: center;
  width: 100%;
  border: ${({ isFocused, status }) => getBorder(status, isFocused)};
  padding: ${({ size }) => PRESSET_SIZES[size].padding};
  border-radius: ${({ size }) => PRESSET_SIZES[size].border_radius};
`;

export const StyledInput = styled.TextInput<StyledInputProps>`
  flex: 1;
  height: ${({ size }) => PRESSET_SIZES[size].font.line_height};
  padding: 0;
  font-size: ${({ size }) => PRESSET_SIZES[size].font.size};
  font-family: Inter_700Bold;
  line-height: ${({ size }) => PRESSET_SIZES[size].font.line_height};
  color: ${colors.neutral[600]};
`;

export const LeftContainer = styled.View`
  margin-right: ${getResponsiveSize(8)};
`;

export const RightContainer = styled.View`
  margin-left: ${getResponsiveSize(8)};
`;

export const ButtonContainer = styled.Pressable`
  margin-left: ${getResponsiveSize(8)};
`;
