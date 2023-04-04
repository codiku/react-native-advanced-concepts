import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { s } from "./App.style";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [imageURIList, setImageURIList] = useState([]);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImageURIList([...imageURIList, result.assets[0].uri]);
    } else {
      alert("You did not select any image.");
    }
  };
  console.log(imageURIList);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={s.title}>Mes photos préférées</Text>
        <View style={s.body}>
          <ScrollView>
            {imageURIList.map((imageURI, i) => (
              <Image
                key={imageURI + i}
                style={s.image}
                source={{ uri: imageURI }}
              />
            ))}
          </ScrollView>
        </View>
        <View style={s.footer}>
          <TouchableOpacity style={s.btn} onPress={pickImageAsync}>
            <Text style={s.btnTxt}>Ajouter photo</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
