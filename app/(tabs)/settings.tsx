import { useAuth } from "@/contexts/auth";
import { useEffect } from "react";
import { Text } from "react-native";

export default function HomeScreen() {
  const { user, logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return <Text>sair</Text>;
}
