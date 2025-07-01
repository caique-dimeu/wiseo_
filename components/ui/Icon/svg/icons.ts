import { SECURITY } from "./security";
import { SOCIAL_MEDIA } from "./socialmedia";

const ICONS = {
  ...SOCIAL_MEDIA,
  ...SECURITY,
};

export type IconsNames = keyof typeof ICONS;
export default ICONS;
