import FetchAllItems from "@/api-functions/fetchAllItems";
import Header from "@/components/Header";
import ItemCard from "@/components/ItemCard";
import ItemModal from "@/components/ItemModal";
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
import { useSelector } from "react-redux";

export default function Items() {
  const isAdmin = useSelector((state: any) => state.admin.isAdmin);
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("see");
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(undefined);

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
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.Container}>
      <ItemModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        type={modalType}
        item={selectedItem}
      />
      <Header />
      <View style={styles.SearchAndAddContainer}>
        <TextInput
          style={[{ width: isAdmin ? "70%" : "100%" }, styles.SearchBar]}
          placeholder="Bir ürün arayın..."
          placeholderTextColor={"black"}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        {isAdmin && (
          <Pressable onPress={() => handleModalOpen("add")}>
            {({ pressed }) => (
              <Text style={[styles.Text, { opacity: pressed ? 0.5 : 1 }]}>
                Ürün Ekle
              </Text>
            )}
          </Pressable>
        )}
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ItemCard
            item={item}
            onPressSee={() => handleModalOpen("see", item)}
            onPressEdit={() => handleModalOpen("edit", item)}
          />
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
