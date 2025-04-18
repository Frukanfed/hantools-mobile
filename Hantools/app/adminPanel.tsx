import Header from "@/components/Header";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function AdminPanel() {
  return (
    <View style={styles.Container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
