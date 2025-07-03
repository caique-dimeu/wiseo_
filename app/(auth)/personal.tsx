import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useRegister } from "@/contexts/register";
import { Subtitle, Title } from "@/styles/layouts/auth/_layout.styles";
import colors from "@/styles/variables/colors";
import removePx from "@/utils/removePx";
import { getResponsiveSize } from "@/utils/responsive";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function PersonalInfoScreen() {
  const router = useRouter();
  const { update } = useRegister();

  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [income, setIncome] = useState("");

  const [nameError, setNameError] = useState("");
  const [birthError, setBirthError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [professionError, setProfessionError] = useState("");
  const [incomeError, setIncomeError] = useState("");

  const formatBirth = (text: string) => {
    return text
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})\/(\d{2})(\d)/, "$1/$2/$3")
      .slice(0, 10);
  };

  const formatPhone = (text: string) => {
    return text
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2")
      .slice(0, 15);
  };

  const handleNext = () => {
    let hasError = false;

    setNameError("");
    setBirthError("");
    setPhoneError("");
    setProfessionError("");
    setIncomeError("");

    if (!name.trim()) {
      setNameError("Preencha seu nome.");
      hasError = true;
    }

    if (!birth.trim()) {
      setBirthError("Preencha sua data de nascimento.");
      hasError = true;
    }

    if (!phone.trim()) {
      setPhoneError("Preencha seu telefone.");
      hasError = true;
    }

    if (!profession.trim()) {
      setProfessionError("Preencha sua profissão.");
      hasError = true;
    }

    if (!income.trim()) {
      setIncomeError("Preencha sua renda mensal.");
      hasError = true;
    }

    if (hasError) return;

    update({ name, birth, phone, profession, income });
    router.replace("./create");
  };

  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: removePx(getResponsiveSize(112)),
          }}
        >
          <Title style={{ width: "80%" }}>Informações Pessoais</Title>
        </View>
        <Subtitle>
          Para começar, por favor forneça suas informações pessoais.
        </Subtitle>
      </View>

      <ScrollView
        style={{ marginVertical: 16 }}
        contentContainerStyle={{ gap: 14 }}
      >
        <View>
          <Text
            style={{
              color: colors.neutral[700],
              fontFamily: "Inter_700Bold",
              fontSize: removePx(getResponsiveSize(20)),
              paddingBottom: removePx(getResponsiveSize(16)),
              lineHeight: removePx(getResponsiveSize(28)),
            }}
          >
            Identificação
          </Text>
          <View style={{ marginBottom: removePx(getResponsiveSize(14)) }}>
            <Input
              placeholder="Nome"
              value={name}
              onChangeText={setName}
              status={nameError ? "danger" : "default"}
              helperText={nameError}
            />
          </View>
          <View style={{ marginBottom: removePx(getResponsiveSize(14)) }}>
            <Input
              placeholder="Data de nascimento"
              value={birth}
              onChangeText={(text) => setBirth(formatBirth(text))}
              status={birthError ? "danger" : "default"}
              helperText={birthError}
              keyboardType="numeric"
            />
          </View>
          <View style={{ marginBottom: removePx(getResponsiveSize(14)) }}>
            <Input
              placeholder="Telefone"
              value={phone}
              onChangeText={(text) => setPhone(formatPhone(text))}
              status={phoneError ? "danger" : "default"}
              helperText={phoneError}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              color: colors.neutral[700],
              fontFamily: "Inter_700Bold",
              fontSize: removePx(getResponsiveSize(20)),
              paddingBottom: removePx(getResponsiveSize(16)),
              paddingTop: removePx(getResponsiveSize(64)),
              lineHeight: removePx(getResponsiveSize(28)),
            }}
          >
            Profissional
          </Text>

          <View style={{ marginBottom: removePx(getResponsiveSize(14)) }}>
            <Input
              placeholder="Profissão"
              value={profession}
              onChangeText={setProfession}
              status={professionError ? "danger" : "default"}
              helperText={professionError}
            />
          </View>
          <View style={{ marginBottom: removePx(getResponsiveSize(14)) }}>
            <Input
              placeholder="Renda Mensal"
              value={income}
              onChangeText={setIncome}
              status={incomeError ? "danger" : "default"}
              helperText={incomeError}
              keyboardType="numeric"
            />
          </View>
        </View>
      </ScrollView>

      <View>
        <Button
          text="Continue para se cadastrar"
          variant="primary"
          click={handleNext}
        />
      </View>
    </View>
  );
}
