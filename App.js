import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { launchImageLibraryAsync } from "expo-image-picker";
import { useState } from "react";
export default function App() {
  const [imageURIList, setImageURIList] = useState([]);
  async function pickImage() {
    const image = await launchImageLibraryAsync();
    if (image.canceled) {
      alert("No image selected");
    } else {
      setImageURIList([...imageURIList, image.assets[0].uri]);
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={s.title}>My favorite pictures</Text>
        <View style={s.body}>
          <ScrollView>
            {imageURIList.map((uri, i) => (
              <Image style={s.image} key={uri + i} source={{ uri }} />
            ))}
          </ScrollView>
        </View>
        <View style={s.footer}>
          <TouchableOpacity style={s.btn} onPress={pickImage}>
            <Text style={s.btnTxt}>Add picture</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
