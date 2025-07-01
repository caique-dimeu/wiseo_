export default function removePx(value: string): number {
  return Number.parseFloat(value.replace("px", ""));
}
