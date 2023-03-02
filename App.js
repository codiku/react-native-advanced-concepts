import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { s } from "./App.style";
import * as ImagePicker from "expo-image-picker";

export default function App() {
 
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={s.title}>Mes photos préférées</Text>
        <View style={s.body}></View>
        <View style={s.footer}>
          <TouchableOpacity style={s.btn} onPress={()=>""}>
            <Text style={s.btnTxt}>Ajouter photo</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
