import React, { useState } from "react";
// // import LinearGradient from "react-native-linear-gradient";
import ContentToggle from "../components/mycomponents/ContentToggle";

import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bannerskara.jpg")}
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Расписание группы МИМИ-122</Text>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            horizontal={false}
          >
            {/* Позволяет нам избежать ограничения по высоте */}
            <ContentToggle />
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#25003B",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    fontFamily: "AGKornelia",
  },
});
