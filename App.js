import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Component1 } from "./components/Component1/Component1";
import { StyleSheet } from "react-native";

export default function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Lord of the rings", price: 9.99 },
    { id: 2, title: "Harry potter", price: 7.8 },
    { id: 3, title: "Fight Club", price: 6.5 },
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <Component1 books={books} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, justifyContent: "center", alignItems: "center" },
});
