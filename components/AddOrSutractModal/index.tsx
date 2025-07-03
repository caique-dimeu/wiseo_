// components/AddOrSubtractModal.tsx

import { db } from "@/libs/firebaseConfig";
import colors from "@/styles/variables/colors";
import removePx from "@/utils/removePx";
import { getResponsiveSize } from "@/utils/responsive";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";

export default function AddOrSubtractModal({
  visible,
  onClose,
  userId,
  isAdding = true,
  onSuccess,
}: {
  visible: boolean;
  onClose: () => void;
  userId: string;
  isAdding?: boolean;
  onSuccess: (newValue: number) => void;
}) {
  const [value, setValue] = useState("");

  const handleSave = async () => {
    const numericValue = parseFloat(value.replace(",", "."));
    if (isNaN(numericValue)) return;

    const ref = doc(db, "main_goal", userId);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const current = snap.data()?.value ?? 0;
      const updated = isAdding
        ? current + numericValue
        : current - numericValue;

      await updateDoc(ref, { value: updated });
      onSuccess(updated);
      onClose();
      setValue("");
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <View
          style={{
            backgroundColor: colors.base.white,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: removePx(getResponsiveSize(24)),
          }}
        >
          <Text
            style={{
              fontSize: removePx(getResponsiveSize(16)),
              fontFamily: "Inter_700Bold",
              color: isAdding ? colors.brand[500] : colors.danger[500],
              marginBottom: 16,
            }}
          >
            {isAdding ? "Adicionar às Economias" : "Subtrair das Economias"}
          </Text>

          <Text
            style={{
              fontSize: removePx(getResponsiveSize(12)),
              color: colors.neutral[700],
              marginBottom: 8,
              fontFamily: "Inter_500Medium",
            }}
          >
            Novo
          </Text>

          <TextInput
            placeholder="Digite o valor"
            keyboardType="numeric"
            value={value}
            onChangeText={setValue}
            style={{
              backgroundColor: colors.neutral[100],
              padding: 12,
              borderRadius: 12,
              marginBottom: 24,
              fontFamily: "Inter_500Medium",
            }}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Pressable
              onPress={onClose}
              style={{
                flex: 1,
                padding: 12,
                borderRadius: 12,
                backgroundColor: colors.neutral[200],
                alignItems: "center",
                marginRight: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: "Inter_500Medium",
                  color: colors.neutral[700],
                }}
              >
                Cancelar
              </Text>
            </Pressable>
            <Pressable
              onPress={handleSave}
              style={{
                flex: 1,
                padding: 12,
                borderRadius: 12,
                backgroundColor: colors.brand[500],
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Inter_500Medium",
                  color: colors.base.white,
                }}
              >
                Salvar
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
