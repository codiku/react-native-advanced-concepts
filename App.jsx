import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { useState, useMemo, useCallback } from "react";
import { Hello } from "./components/Hello";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [bgColor, setBgColor] = useState("cyan");

  const valueRelatedToCounter = useMemo(() => {
    return expensiveFunction(counter);
  }, [counter]);

  const onHelloPressed = useCallback(() => {
    alert("Hello");
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[s.main, { backgroundColor: bgColor }]}>
        <TouchableOpacity onPress={() => setCounter(counter + 1)}>
          <Text>Counter : {counter}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBgColor(bgColor === "cyan" ? "white" : "cyan")}
        >
          <Text>Toggle backroundcolor</Text>
        </TouchableOpacity>
        <Text>Value based on counter {valueRelatedToCounter}</Text>
        <Hello onPress={onHelloPressed} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function expensiveFunction(value) {
  console.log("expensiveFunction running");
  let newResult = 0;
  for (let i = 0; i < 1000; i++) {
    newResult += i * value;
  }
  return newResult;
}
