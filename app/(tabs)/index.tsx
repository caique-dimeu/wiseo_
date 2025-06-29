import { useAuth } from "@/contexts/auth";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo 👋</Text>
      <Text style={styles.email}>Email: {user?.email}</Text>

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
