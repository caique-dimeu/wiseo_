import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useEffect, useState } from "react";
import { useResponsiveSize } from "./useResponsiveSize";

export const useAppAssets = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
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
