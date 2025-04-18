import FetchAllItems from "@/api-functions/fetchAllItems";
import CustomerCard from "@/components/CustomerCard";
import CustomerModal from "@/components/CustomerModal";
import Header from "@/components/Header";
import { Item, ModalType } from "@/constants/Types";
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

export default function Items() {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("see");
  const [selectedCustomer, setSelectedCustomer] = useState<Item | undefined>(
    undefined
  );

  useEffect(() => {
    getItems();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getItems();
    }, [])
  );

  const getItems = () => {
    const fetchedItems = FetchAllItems();
    setItems(fetchedItems);
  };

  const filteredData = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.buying_price).includes(searchQuery) ||
      String(item.consignment).includes(searchQuery) ||
      String(item.selling_price).includes(searchQuery) ||
      String(item.tl_price).includes(searchQuery)
  );

  const handleModalOpen = (type: ModalType, item?: Item) => {
    setModalType(type);
    setSelectedCustomer(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.Container}>
      {/* <CustomerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        type={modalType}
        customer={selectedCustomer}
      /> */}
      <Header />
      <View style={styles.SearchAndAddContainer}>
        <TextInput
          style={styles.SearchBar}
          placeholder="Bir ürün arayın..."
          placeholderTextColor={"black"}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Pressable onPress={() => handleModalOpen("add")}>
          {({ pressed }) => (
            <Text style={[styles.Text, { opacity: pressed ? 0.5 : 1 }]}>
              Ürün Ekle
            </Text>
          )}
        </Pressable>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Text>a</Text>
          // <CustomerCard
          //   name={item.name}
          //   phone={String(item.phone)}
          //   city={item.city}
          //   district={item.district}
          //   onPressSee={() => handleModalOpen("see", item)}
          //   onPressEdit={() => handleModalOpen("edit", item)}
          //   onPressDelete={() => {}}
          // />
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
