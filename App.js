import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={s.title}>My favorite pictures</Text>
        <View style={s.body}></View>
        <View style={s.footer}>
          <TouchableOpacity style={s.btn} onPress={() => ""}>
            <Text style={s.btnTxt}>Add picture</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
