import React from "react";
import Routes from "./src/routes";
import { Inter_700Bold, useFonts } from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <Routes />;
}
