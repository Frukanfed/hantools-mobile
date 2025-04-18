import FetchAllCustomers from "@/api-functions/fetchAllCustomers";
import FetchAllReports from "@/api-functions/fetchAllReports";
import Header from "@/components/Header";
import ReportCard from "@/components/ReportCard";
import { Report } from "@/constants/Types";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

export default function Reports() {
  const [searchQuery, setSearchQuery] = useState("");
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    getReports();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getReports();
    }, [])
  );

  const getReports = () => {
    const fetchedReports = FetchAllReports();
    setReports(fetchedReports);
  };

  const filteredData = reports.filter(
    (item) =>
      item.dealer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.amount).includes(searchQuery) ||
      item.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.Container}>
      <Header />
      <View style={styles.SearchAndAddContainer}>
        <TextInput
          style={styles.SearchBar}
          placeholder="Bir rapor arayın..."
          placeholderTextColor={"black"}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ReportCard report={item} />}
        style={{ marginBottom: 100 }}
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
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
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
});
