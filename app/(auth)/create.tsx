import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useRegister } from "@/contexts/register";
import { auth, db } from "@/libs/firebaseConfig";
import { Subtitle, Title } from "@/styles/layouts/auth/_layout.styles";
import colors from "@/styles/variables/colors";
import removePx from "@/utils/removePx";
import { getResponsiveSize } from "@/utils/responsive";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const avatarOptions = [
  "fox",
  "cat",
  "owl",
  "alien",
  "robot",
  "ghost",
  "bear",
  "panda",
  "lion",
  "monkey",
  "tiger",
  "koala",
];

const getDicebearUrl = (seed: string) =>
  `https://api.dicebear.com/8.x/lorelei/png?seed=${seed}&size=128`;

export default function CreateAvatarScreen() {
  const router = useRouter();
  const { data, update } = useRegister();

  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(getDicebearUrl("fox"));
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setUsernameError("");

    if (!username.trim()) {
      setUsernameError("Preencha um nome de usuário.");
      return;
    }

    try {
      setLoading(true);
      update({ username });

      const { email, password, name, birth, income, profession } = data;

      const userCred = await createUserWithEmailAndPassword(
        auth,
        email!,
        password!
      );

      await setDoc(doc(db, "users", userCred.user.uid), {
        avatar,
        birth,
        income,
        name,
        profession,
        user: username,
        createdAt: new Date(),
      });

      router.replace("../(auth)/success");
    } catch (e) {
      console.error("Erro ao criar conta:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <View>
        <Title style={{ width: removePx(getResponsiveSize(160)) }}>
          Crie sua Conta
        </Title>
      </View>
      <Subtitle style={{ marginBottom: removePx(getResponsiveSize(16)) }}>
        Para finalizar personalize seu perfil, escolha um avatar ilustrado e um
        nome de usuário
      </Subtitle>
      <Pressable onPress={() => setShowAvatarPicker(true)}>
        <Image
          source={{ uri: avatar }}
          style={{
            width: removePx(getResponsiveSize(114)),
            height: removePx(getResponsiveSize(114)),
            borderRadius: 999,
            alignSelf: "center",
            borderWidth: 2,
            borderColor: colors.brand[500],
          }}
        />
      </Pressable>
      <View style={{ marginTop: removePx(getResponsiveSize(60)) }}>
        <Input
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
          status={usernameError ? "danger" : "default"}
          helperText={usernameError}
        />
      </View>
      <View style={{ marginTop: removePx(getResponsiveSize(156)) }}>
        <Button
          text="Criar conta"
          variant="primary"
          click={handleCreate}
          loading={loading}
        />
      </View>
      <Modal visible={showAvatarPicker} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.6)",
            justifyContent: "center",
            alignItems: "center",
            padding: removePx(getResponsiveSize(24)),
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: removePx(getResponsiveSize(16)),
              padding: removePx(getResponsiveSize(16)),
              width: "100%",
              maxWidth: removePx(getResponsiveSize(320)),
            }}
          >
            <Text
              style={{
                fontSize: removePx(getResponsiveSize(18)),
                fontWeight: "bold",
                marginBottom: removePx(getResponsiveSize(12)),
                textAlign: "center",
              }}
            >
              Escolha seu avatar
            </Text>

            <FlatList
              data={avatarOptions}
              numColumns={3}
              keyExtractor={(item) => item}
              renderItem={({ item }) => {
                const avatarUrl = getDicebearUrl(item);
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setAvatar(avatarUrl);
                      setShowAvatarPicker(false);
                    }}
                    style={{
                      margin: removePx(getResponsiveSize(8)),
                      borderRadius: 999,
                      overflow: "hidden",
                      borderWidth: 2,
                      borderColor:
                        avatar === avatarUrl
                          ? colors.brand[500]
                          : "transparent",
                    }}
                  >
                    <Image
                      source={{ uri: avatarUrl }}
                      style={{
                        width: removePx(getResponsiveSize(64)),
                        height: removePx(getResponsiveSize(64)),
                        borderRadius: 999,
                      }}
                    />
                  </TouchableOpacity>
                );
              }}
              contentContainerStyle={{ alignItems: "center" }}
            />
            <View style={{ marginTop: removePx(getResponsiveSize(16)) }}>
              <Button
                text="Cancelar"
                variant="secondary"
                click={() => setShowAvatarPicker(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
