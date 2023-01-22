import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Composant1 } from "./components/Composant1";

export default function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Le seigneur des anneaux", price: 9.99 },
    { id: 2, title: "Harry potter", price: 7.8 },
    { id: 3, title: "Le petit prince", price: 6.5 },
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Composant1 books={books} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
