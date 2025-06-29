import { AuthProvider, useAuth } from "@/contexts/auth";
import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

function LayoutWrapper() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  const isAuthRoute = segments[0] === "(auth)";

  useEffect(() => {
    if (!loading) {
      if (!user && !isAuthRoute) {
        router.replace("/(auth)/login");
      } else if (user && isAuthRoute) {
        router.replace("/(tabs)");
      }
    }
  }, [loading, user, isAuthRoute, router]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if ((!user && !isAuthRoute) || (user && isAuthRoute)) {
    return null;
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <LayoutWrapper />
    </AuthProvider>
  );
}
