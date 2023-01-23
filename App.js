import { useEffect, useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.main}>
        <TextInput placeholder="Numéro de carte" />
        <TextInput placeholder="Code secret" />
        <TextInput placeholder="Date d'expiration" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  main: { flex: 1, justifyContent: "center", alignItems: "center" },
});
