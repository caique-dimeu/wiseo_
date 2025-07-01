import type Sizes from "@/types/Sizes";
import { getResponsiveSize } from "@/utils/responsive";

interface IBaseStyleSizes {
  height: string;
  padding: string;
  border_radius: string;
  font: {
    size: string;
    line_height: string;
  };
  icon: number;
}

export const PRESSET_SIZES: Record<Sizes, IBaseStyleSizes> = {
  small: {
    height: getResponsiveSize(36),
    padding: `${getResponsiveSize(8)} ${getResponsiveSize(12)}`,
    border_radius: getResponsiveSize(14),
    font: {
      size: getResponsiveSize(14),
      line_height: getResponsiveSize(20),
    },
    icon: 16,
  },
  medium: {
    height: getResponsiveSize(48),
    border_radius: getResponsiveSize(16),
    padding: `${getResponsiveSize(12)} ${getResponsiveSize(16)}`,
    font: {
      size: getResponsiveSize(16),
      line_height: getResponsiveSize(24),
    },
    icon: 20,
  },
  large: {
    height: getResponsiveSize(56),
    padding: `${getResponsiveSize(14)} ${getResponsiveSize(20)}`,
    border_radius: getResponsiveSize(18),
    font: {
      size: getResponsiveSize(18),
      line_height: getResponsiveSize(28),
    },
    icon: 24,
  },
};
