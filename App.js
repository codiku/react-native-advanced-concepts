import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Composant1 } from "./components/Composant1/Composant1";
import { BookContext } from "./contexts/BookContext";

export default function App() {
  const [currency, setCurrency] = useState("$");
  const [books, setBooks] = useState([
    { id: 1, title: "Le seigneur des anneaux", price: 9.99 },
    { id: 2, title: "Harry potter", price: 7.8 },
    { id: 3, title: "Le petit prince", price: 6.5 },
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.main}>
        <BookContext.Provider value={{ books, currency, setCurrency }}>
          <Composant1 books={books} />
        </BookContext.Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  main: { flex: 1, justifyContent: "center", alignItems: "center" },
});
