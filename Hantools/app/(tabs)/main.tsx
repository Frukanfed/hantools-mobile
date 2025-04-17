import Header from "@/components/Header";
import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";

const data = [
  {
    id: "1",
    name: "Jane Doe",
    phone: "1111111111",
    city: "Istanbul",
    district: "Beşiktaş",
  },
  {
    id: "2",
    name: "Arthur Morgan",
    phone: "0000112233",
    city: "Blackwater",
    district: "Santa Fe",
  },
  {
    id: "3",
    name: "Muster1",
    phone: "22222222",
    city: "Istanbul",
    district: "Beşiktaş",
  },
  {
    id: "4",
    name: "Müşteri",
    phone: "222",
    city: "BAŞAKŞEHİR",
    district: "BAŞAKŞEHİR",
  },
];

export default function Main() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.includes(searchQuery)
  );

  return (
    <View style={styles.Container}>
      <Header />
      <TextInput
        style={styles.SearchBar}
        placeholder="Search for a customer..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.Card}>
            <Text style={styles.Name}>{item.name}</Text>
            <Text>{item.phone}</Text>
            <Text>
              {item.city} / {item.district}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  SearchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  Card: {
    padding: 15,
    marginBottom: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  Name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
