import { getResponsiveSize } from "@/utils/responsive";
import type { IconsNames } from "./svg/icons";
import ICONS from "./svg/icons";
import type ICommonIconProps from "./interfaces/ICommonIconProps";
import removePx from "@/utils/removePx";

interface IconProps extends ICommonIconProps {
  name: IconsNames;
}

export default function Icon({
  color = "currentColor",
  name,
  size = 24,
  weight = "1.5",
}: IconProps) {
  const IconComponent = ICONS[name];
  return (
    <IconComponent
      color={color}
      size={removePx(getResponsiveSize(size))}
      weight={weight}
    />
  );
}
