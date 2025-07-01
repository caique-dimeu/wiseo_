import colors from "@/styles/colors";
import type { Variants } from "..";

export const PRESSET_COLORS: Record<Variants, string> = {
  primary: colors.brand[500],
  secondary: colors.neutral[50],
  ghost: "transparent",
  danger: colors.danger[500],
  warning: colors.warning[400],
  success: colors.success[500],
};
