import FetchAllCustomers from "@/api-functions/fetchAllCustomers";
import Header from "@/components/Header";
import { Customer } from "@/constants/Types";
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

export default function Main() {
  const [searchQuery, setSearchQuery] = useState("");
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    const fetchedCustomers = FetchAllCustomers();
    setCustomers(fetchedCustomers);
  };

  const filteredData = customers.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.phone).includes(searchQuery) ||
      item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.district.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.Container}>
      <Header />
      <View style={styles.SearchAndAddContainer}>
        <TextInput
          style={styles.SearchBar}
          placeholder="Bir müşteri arayın..."
          placeholderTextColor={"black"}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Pressable style={styles.NewCustomerButton}>
          {({ pressed }) => (
            <Text style={[styles.Text, { opacity: pressed ? 0.5 : 1 }]}>
              Müşteri Ekle
            </Text>
          )}
        </Pressable>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => String(item.id)}
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
  SearchAndAddContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  SearchBar: {
    height: 40,
    width: "70%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  NewCustomerButton: {},
  Text: {
    backgroundColor: "#297be8",
    color: "white",
    borderRadius: 5,
    textAlign: "center",
    width: 80,
    height: 40,
    fontSize: 12,
    paddingVertical: 11,
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
