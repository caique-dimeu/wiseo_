import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useEffect, useState } from "react";
import { useResponsiveSize } from "./useResponsiveSize";

export const useAppAssets = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  const { ready: responsiveReady } = useResponsiveSize();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded && responsiveReady) {
      setIsReady(true);
    }
  }, [fontsLoaded, responsiveReady]);

  return { isReady };
};
