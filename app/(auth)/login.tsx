import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { auth } from "@/libs/firebaseConfig";
import { HelpText, Regular } from "@/styles/layouts/_layout.styles";
import { Subtitle, Title } from "@/styles/layouts/auth/_layout.styles";
import colors from "@/styles/variables/colors";
import removePx from "@/utils/removePx";
import { getResponsiveSize } from "@/utils/responsive";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Pressable, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Title>Vamos, Faça login</Title>
        </View>

        <Subtitle>
          Ficamos felizes em te ver! Por favor, entre com seus dados de conta.
        </Subtitle>
      </View>

      <View
        style={{ width: "100%", marginBottom: removePx(getResponsiveSize(64)) }}
      >
        <View style={{ marginBottom: removePx(getResponsiveSize(14)) }}>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View>
        <View>
          <Button
            text="Entrar"
            variant="primary"
            click={handleLogin}
            loading={loading}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Regular>ou</Regular>
        </View>
        <View style={{ marginBottom: removePx(getResponsiveSize(46)) }}>
          <Button
            text="Entrar com Google"
            icon="sm google"
            variant="secondary"
            click={() => console.log("clique")}
          />
        </View>

        <Pressable
          style={{ justifyContent: "center", flexDirection: "row" }}
          onPress={() => router.replace("./register")}
        >
          <HelpText>Já possui Conta? </HelpText>
          <HelpText
            style={{
              color: colors.brand[500],
              fontFamily: "Inter_600SemiBold",
            }}
          >
            Registrar
          </HelpText>
        </Pressable>
      </View>
    </View>
  );
}
