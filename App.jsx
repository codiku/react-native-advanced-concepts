import { useRef } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const secretCodeRef = useRef();
  const expirationDateRef = useRef();

  function onCardNumberChange(text) {
    if (text.length > 16) {
      secretCodeRef.current.focus();
    }
  }
  function onSecretCodeChange(text) {
    if (text.length > 3) {
      expirationDateRef.current.focus();
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.main}>
        <TextInput
          onChangeText={onCardNumberChange}
          placeholder="Card number"
        />
        <TextInput
          onChangeText={onSecretCodeChange}
          ref={secretCodeRef}
          placeholder="Secret code"
        />
        <TextInput ref={expirationDateRef} placeholder="Expiration date" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  main: { flex: 1, justifyContent: "center", alignItems: "center" },
});
