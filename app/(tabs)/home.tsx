import { Button, StyleSheet, View } from "react-native";

import { useAuth } from "@/contexts/auth";

export default function HomeScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Sair" onPress={logout} color="#d9534f" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  email: { fontSize: 16, marginBottom: 32 },
  button: { width: 120 },
});
