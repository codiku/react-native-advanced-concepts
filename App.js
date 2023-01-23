import { useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  const refCardExpirationInput = useRef();
  const refCodeInput = useRef();

  function onCardNumberChange(text) {
    if (text.length >= 16) {
      refCodeInput.current.focus();
    }
  }

  function onCodeChange(text) {
    if (text.length >= 3) {
      refCardExpirationInput.current.focus();
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.main}>
        <TextInput
          onChangeText={onCardNumberChange}
          placeholder="Numéro de carte"
        />
        <TextInput
          ref={refCodeInput}
          onChangeText={onCodeChange}
          placeholder="Code secret"
        />

        <TextInput
          ref={refCardExpirationInput}
          placeholder="Date d'expiration"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  main: { flex: 1, justifyContent: "center", alignItems: "center" },
});
