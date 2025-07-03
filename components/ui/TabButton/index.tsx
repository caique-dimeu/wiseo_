import colors from "@/styles/variables/colors";
import removePx from "@/utils/removePx";
import { getResponsiveSize } from "@/utils/responsive";
import { Pressable } from "react-native";
import Icon from "../Icon";
import type { IconsNames } from "../Icon/svg/icons";

interface TabButtonProps {
  active?: boolean;
  name: IconsNames;
  onPress: () => void;
}

export default function TabButton({ active, name, onPress }: TabButtonProps) {
  return (
    <Pressable
      style={{
        width: removePx(getResponsiveSize(48)),
        height: removePx(getResponsiveSize(48)),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: active ? colors.brand[500] : "transparent",
        borderRadius: "50%",
      }}
      onPress={onPress}
    >
      <Icon
        name={name}
        color={active ? colors.base.white : colors.neutral[600]}
        size={removePx(getResponsiveSize(18))}
      />
    </Pressable>
  );
}
