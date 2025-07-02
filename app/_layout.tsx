import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

import { AuthProvider, useAuth } from "@/contexts/auth";
import { useAppAssets } from "@/hooks/useAppAssets";
import { MainLayout } from "@/styles/layouts/_layout.styles";

function LayoutWrapper() {
  const { user, loading } = useAuth();
  const { isReady } = useAppAssets();
  const router = useRouter();
  const segments = useSegments();

  const isAuthRoute = segments[0] === "(auth)";

  useEffect(() => {
    if (!loading) {
      if (!user && !isAuthRoute) {

        router.navigate("../(auth)/login");
      } else if (user && isAuthRoute) {
        router.replace("../(tabs)/home");
      }
    }
  }, [loading, user, isAuthRoute, router]);

  if (loading || !isReady) {
    return (
      <MainLayout>
        <ActivityIndicator size="large" />
      </MainLayout>
    );
  }

  if ((!user && !isAuthRoute) || (user && isAuthRoute)) {
    return null;
  }

  return (
    <MainLayout>
      <Slot />
    </MainLayout>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <LayoutWrapper />
    </AuthProvider>
  );
}
