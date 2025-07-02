import { useState } from "react";
import type { TextInputProps } from "react-native";

import colors from "@/styles/variables/colors";
import type Feedbacks from "@/types/Feedbacks";
import type Sizes from "@/types/Sizes";
import removePx from "@/utils/removePx";

import Icon from "../Icon";
import type { IconsNames } from "../Icon/svg/icons";
import Loading from "../Loading";
import { PRESSET_SIZES } from "./pressets/sizes";
import {
  ButtonContainer,
  InputContainer,
  LeftContainer,
  RightContainer,
  StyledInput,
} from "./styles";

export type InputStatus = Feedbacks | "default";

interface InputProps extends TextInputProps {
  iconRight?: IconsNames;
  iconLeft?: IconsNames;
  status?: InputStatus;
  loading?: boolean;
  size?: Sizes;
  type?: "password" | "text" | "number" | "email";
}

export default function Input({
  iconRight,
  iconLeft,
  loading,
  status = "default",
  size = "medium",
  type = "text",
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [canView, setCanView] = useState(false);

  const toggleVisibilityIcon = () => setCanView((prev) => !prev);

  return (
    <InputContainer status={status} isFocused={isFocused} size={size}>
      {iconLeft && (
        <LeftContainer>
          <Icon name={iconLeft} size={PRESSET_SIZES[size].icon || 20} />
        </LeftContainer>
      )}

      <StyledInput
        placeholderTextColor={colors.neutral[500]}
        selectionColor={colors.neutral[500]}
        status={status}
        size={size}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={type === "password" && !canView}
        {...rest}
      />

      {loading && (
        <RightContainer>
          <Loading size={removePx(PRESSET_SIZES[size].font.size) || 20} />
        </RightContainer>
      )}

      {iconRight && type !== "password" && (
        <RightContainer>
          <Icon name={iconRight} size={PRESSET_SIZES[size].icon || 20} />
        </RightContainer>
      )}

      {type === "password" && (
        <ButtonContainer onPress={toggleVisibilityIcon}>
          <Icon
            name={canView ? "sec eye" : "sec eye-closed"}
            size={PRESSET_SIZES[size].icon || 20}
            color={colors.neutral[500]}
          />
        </ButtonContainer>
      )}
    </InputContainer>
  );
}
