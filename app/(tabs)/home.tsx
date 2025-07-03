import Icon from "@/components/ui/Icon";
import { useAuth } from "@/contexts/auth";
import { db } from "@/libs/firebaseConfig";
import colors from "@/styles/variables/colors";
import removePx from "@/utils/removePx";
import { getResponsiveSize } from "@/utils/responsive";
import { type DocumentData, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const { user } = useAuth();
  const [userData, setUserData] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.uid) return;

      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user?.uid]);

  function formatDate(date: Date) {
    const day = date.getDate();
    const year = date.getFullYear();

    const months = [
      "jan.",
      "fev.",
      "mar.",
      "abr.",
      "mai.",
      "jun.",
      "jul.",
      "ago.",
      "set.",
      "out.",
      "nov.",
      "dez.",
    ];
    const month = months[date.getMonth()];

    return `${day} ${month} ${year}`;
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.base.white }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingBottom: removePx(getResponsiveSize(34)),
        }}
      >
        <View>
          <View>
            <Text
              style={{
                color: colors.neutral[700],
                fontFamily: "Inter_700Bold",
                fontSize: removePx(getResponsiveSize(24)),
                lineHeight: removePx(getResponsiveSize(32)),
              }}
            >
              Olá {userData?.name}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: colors.neutral[700],
                fontFamily: "Inter_600SemiBold",
                fontSize: removePx(getResponsiveSize(12)),
                lineHeight: removePx(getResponsiveSize(16)),
              }}
            >
              {formatDate(new Date())}
            </Text>
          </View>
        </View>
        <Pressable
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.062)",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            width: removePx(getResponsiveSize(32)),
            height: removePx(getResponsiveSize(32)),
          }}
        >
          <Icon name="ui bell" color={colors.neutral[500]} />
        </Pressable>
      </View>

      <View>
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
            Economias
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            width: "100%",
            backgroundColor: colors.neutral[50],
            padding: removePx(getResponsiveSize(16)),
            borderRadius: removePx(getResponsiveSize(18)),
          }}
        >
          <View>
            <Text
              style={{
                color: colors.neutral[600],
                fontFamily: "Inter_600SemiBold",
                fontSize: removePx(getResponsiveSize(24)),
                paddingBottom: removePx(getResponsiveSize(16)),
                lineHeight: removePx(getResponsiveSize(32)),
              }}
            >
              R$ 3000,00
            </Text>
            <View>
              <Text>icone</Text>
              <Text
                style={{
                  color: colors.danger[500],
                  fontFamily: "Inter_500Medium",
                  fontSize: removePx(getResponsiveSize(10)),
                  paddingBottom: removePx(getResponsiveSize(16)),
                  lineHeight: removePx(getResponsiveSize(16)),
                }}
              >
                8% abaixo da meta
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={{
                flexDirection: "row",
                backgroundColor: colors.brand[500],
                paddingRight: removePx(getResponsiveSize(8)),
                paddingLeft: removePx(getResponsiveSize(8)),
                paddingTop: removePx(getResponsiveSize(4)),
                paddingBottom: removePx(getResponsiveSize(4)),
                borderRadius: removePx(getResponsiveSize(18)),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: colors.neutral[25],
                  fontFamily: "Inter_500Medium",
                  fontSize: removePx(getResponsiveSize(10)),
                  lineHeight: removePx(getResponsiveSize(12)),
                }}
              >
                Adicionar
              </Text>
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                backgroundColor: "rgba(0,0,0,0.05)",
                paddingRight: removePx(getResponsiveSize(8)),
                paddingLeft: removePx(getResponsiveSize(8)),
                paddingTop: removePx(getResponsiveSize(4)),
                paddingBottom: removePx(getResponsiveSize(4)),
                borderRadius: removePx(getResponsiveSize(18)),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: colors.neutral[700],
                  fontFamily: "Inter_500Medium",
                  fontSize: removePx(getResponsiveSize(10)),
                  lineHeight: removePx(getResponsiveSize(12)),
                }}
              >
                subtrair
              </Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Pressable>Grafico</Pressable>
          <Pressable>Settings</Pressable>
        </View>
      </View>

      <View>
        <Pressable>contas</Pressable>
        <Pressable>metas</Pressable>
        <Pressable>categorias</Pressable>
        <Pressable>transações</Pressable>
      </View>

      <View>
        <View>
          <Text>Últimos eventos</Text>
          <Text>ver detalhes</Text>
        </View>
      </View>
      <View>Listagem de categorias</View>
    </ScrollView>
  );
}
