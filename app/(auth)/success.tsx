import Button from "@/components/ui/Button";
import { Subtitle, Title } from "@/styles/layouts/auth/_layout.styles";
import removePx from "@/utils/removePx";
import { getResponsiveSize } from "@/utils/responsive";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";

export default function SuccessScreen() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require("@/assets/images/states/success.png")}
        style={{
          width: removePx(getResponsiveSize(318)),
          height: removePx(getResponsiveSize(318)),
        }}
      />

      <View>
        <Title
          style={{ marginTop: removePx(getResponsiveSize(28)), width: "100%" }}
        >
          Conta Criada!
        </Title>
      </View>

      <Subtitle style={{ marginBottom: 24 }}>
        Sua conta foi criada com sucesso! Estamos muito felizes em tê-lo
        conosco.
      </Subtitle>

      <View>
        <Button
          text="Ir para tela inicial"
          variant="primary"
          click={() => router.replace("./(tabs)/home")}
        />
      </View>
    </View>
  );
}
