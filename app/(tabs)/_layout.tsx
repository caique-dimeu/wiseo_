import type { IconsNames } from "@/components/ui/Icon/svg/icons";
import TabButton from "@/components/ui/TabButton";
import removePx from "@/utils/removePx";
import { getResponsiveSize } from "@/utils/responsive";
import { Slot, usePathname, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

const tabs = [
  { name: "home", icon: "ui dashboard" },
  { name: "analytics", icon: "ui analytics" },
  { name: "transaction", icon: "ui transaction" },
  { name: "insights", icon: "ui insights" },
  { name: "settings", icon: "ui settings" },
];

export default function CustomTabLayout() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={{ flex: 1 }}>
      <Slot />

      <View style={styles.tabBar}>
        {tabs.map(({ name, icon }) => (
          <TabButton
            key={name}
            name={icon as IconsNames}
            active={pathname.includes(name)}
            onPress={() => router.replace(`./${name}`)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: removePx(getResponsiveSize(0)),
    left: removePx(getResponsiveSize(20)),
    right: removePx(getResponsiveSize(20)),
    height: removePx(getResponsiveSize(56)),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: removePx(getResponsiveSize(40)),
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: removePx(getResponsiveSize(2)),
    },
    shadowOpacity: 0.1,
    shadowRadius: removePx(getResponsiveSize(4)),
    elevation: 10,
  },
});
