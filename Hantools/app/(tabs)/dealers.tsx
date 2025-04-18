import FetchAllDealers from "@/api-functions/fetchAllDealers";
import DealerCard from "@/components/DealerCard";
import DealerModal from "@/components/DealerModal";
import Header from "@/components/Header";
import { Dealer, ModalType } from "@/constants/Types";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";

export default function Dealers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("see");
  const [selectedDealer, setselectedDealer] = useState<Dealer | undefined>(
    undefined
  );

  useEffect(() => {
    getDealers();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getDealers();
    }, [])
  );

  const getDealers = () => {
    const fetchedDealers = FetchAllDealers();
    setDealers(fetchedDealers);
  };

  const filteredData = dealers.filter(
    (item) =>
      item.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.phone).includes(searchQuery)
  );

  const handleModalOpen = (type: ModalType, dealer?: Dealer) => {
    setModalType(type);
    setselectedDealer(dealer);
    setModalVisible(true);
  };

  const handleDeleteDealer = (id: number) => {
    Alert.alert("Satıcı Sil", "Bu satıcıyı silmek istediğinize emin misiniz?", [
      { text: "İptal", style: "cancel" },
      {
        text: "Sil",
        style: "destructive",
        onPress: () =>
          setDealers((prev) => prev.filter((dealer) => dealer.id !== id)),
      },
    ]);
  };

  return (
    <View style={styles.Container}>
      <DealerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        type={modalType}
        dealer={selectedDealer}
      />
      <Header />
      <View style={styles.SearchAndAddContainer}>
        <TextInput
          style={styles.SearchBar}
          placeholder="Bir satıcı arayın..."
          placeholderTextColor={"black"}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Pressable onPress={() => handleModalOpen("add")}>
          {({ pressed }) => (
            <Text style={[styles.Text, { opacity: pressed ? 0.5 : 1 }]}>
              Satıcı Ekle
            </Text>
          )}
        </Pressable>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <DealerCard
            first_name={item.first_name}
            last_name={item.last_name}
            username={item.username}
            phone={String(item.phone)}
            onPressEdit={() => handleModalOpen("edit", item)}
            onPressDelete={() => handleDeleteDealer(item.id)}
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
