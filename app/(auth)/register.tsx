import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useRegister } from "@/contexts/register";
import { HelpText, Regular } from "@/styles/layouts/_layout.styles";
import { Subtitle, Title } from "@/styles/layouts/auth/_layout.styles";
import colors from "@/styles/variables/colors";
import removePx from "@/utils/removePx";
import { getResponsiveSize } from "@/utils/responsive";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const { update } = useRegister();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleNext = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (password !== confirmPassword) {
      setConfirmPasswordError("As senhas não coincidem.");
      return;
    }

    update({ email, password });
    router.replace("./personal");
  };

  return (
    <View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Title style={{ width: "80%" }}>Vamos, Crie uma Conta</Title>
        </View>
        <Subtitle>
          Estamos animados para te receber! Por favor, crie sua conta para
          começar.
        </Subtitle>
      </View>

      <View
        style={{ width: "100%", marginBottom: removePx(getResponsiveSize(64)) }}
      >
        <View style={{ marginBottom: removePx(getResponsiveSize(14)) }}>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            status={emailError ? "danger" : "default"}
            helperText={emailError}
          />
        </View>

        <View style={{ marginBottom: removePx(getResponsiveSize(14)) }}>
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            status={passwordError ? "danger" : "default"}
            helperText={passwordError}
            type="password"
          />
        </View>

        <Input
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          status={confirmPasswordError ? "danger" : "default"}
          helperText={confirmPasswordError}
          type="password"
        />
      </View>

      <View>
        <Button
          text="Continuar para o cadastro"
          variant="primary"
          click={handleNext}
          loading={loading}
        />

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
          onPress={() => router.replace("./login")}
        >
          <HelpText>Já possui Conta? </HelpText>
          <HelpText
            style={{
              color: colors.brand[500],
              fontFamily: "Inter_600SemiBold",
            }}
          >
            Entrar
          </HelpText>
        </Pressable>
      </View>
    </View>
  );
}
