import { RegisterProvider } from "@/contexts/register";
import { AuthContainer } from "@/styles/layouts/auth/_layout.styles";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <RegisterProvider>
      <AuthContainer>
        <Slot />
      </AuthContainer>
    </RegisterProvider>
  );
}
