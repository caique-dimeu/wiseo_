import { Slot } from "expo-router";

import { AuthContainer } from "@/styles/layouts/auth/_layout.styles";

export default function RootLayout() {
  return (
    <AuthContainer>
      <Slot />
    </AuthContainer>
  );
}
