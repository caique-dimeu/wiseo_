import { SECURITY } from "./security";
import { SOCIAL_MEDIA } from "./socialmedia";
import { UI } from "./ui";

const ICONS = {
  ...SOCIAL_MEDIA,
  ...SECURITY,
  ...UI,
};

export type IconsNames = keyof typeof ICONS;
export default ICONS;
