import type Feedbacks from "@/types/Feedbacks";
import type Sizes from "@/types/Sizes";
import removePx from "@/utils/removePx";
import { Animated } from "react-native";
import Icon from "../Icon";
import type { IconsNames } from "../Icon/svg/icons";
import Loading from "../Loading";
import usePressAnimation from "./hooks/usePressAnimation";
import { PRESSET_SIZES } from "./pressets/sizes";
import { ContentWrapper, StyledButton, StyledText } from "./styles";

export type Variants = "primary" | "secondary" | "ghost" | Feedbacks;

interface ButtonProps {
  text: string;
  variant?: Variants;
  icon?: IconsNames;
  loading?: boolean;
  disabled?: boolean;
  size?: Sizes;
  click: () => void;
}

export default function Button({
  text,
  variant = "primary",
  icon,
  loading,
  disabled,
  click,
  size = "medium",
}: ButtonProps) {
  const { animatedStyle, handlePressIn, handlePressOut } = usePressAnimation();

  const handlePress = () => {
    handlePressOut();
    click();
  };

  const colorLoading =
    variant === "secondary" || variant === "ghost" ? "dark" : "light";

  return (
    <Animated.View style={{ ...animatedStyle, width: "100%" }}>
      <StyledButton
        variant={variant}
        size={size}
        disabled={disabled}
        onPressIn={handlePressIn}
        onPressOut={handlePress}
      >
        <ContentWrapper>
          {loading && (
            <Loading
              size={removePx(PRESSET_SIZES[size].font.size) || 20}
              color={colorLoading}
            />
          )}
          {icon && <Icon name={icon} size={PRESSET_SIZES[size].icon || 20} />}
          <StyledText variant={variant} size={size}>
            {text}
          </StyledText>
        </ContentWrapper>
      </StyledButton>
    </Animated.View>
  );
}
