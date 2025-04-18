import FetchAllOrders from "@/api-functions/fetchAllOrders";
import DealerCard from "@/components/DealerCard";
import DealerModal from "@/components/DealerModal";
import Header from "@/components/Header";
import OrderCard from "@/components/OrderCard";
import { Dealer, ModalType, Order } from "@/constants/Types";
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

export default function Orders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("see");
  const [selectedOrder, setSelectedOrder] = useState<Order | undefined>(
    undefined
  );

  useEffect(() => {
    getDealer();
  }, []);

  const getDealer = () => {
    const fetchedOrders = FetchAllOrders();
    setOrders(fetchedOrders);
  };

  const filteredData = orders.filter(
    (item) =>
      item.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.seller.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.products.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.payment_method.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.cost).includes(searchQuery)
  );

  const handleModalOpen = (type: ModalType, order?: Order) => {
    setModalType(type);
    setSelectedOrder(order);
    setModalVisible(true);
  };

  const handleDeleteDealer = (id: number) => {
    Alert.alert(
      "Siparişi Sil",
      "Bu siparişi silmek istediğinize emin misiniz?",
      [
        { text: "İptal", style: "cancel" },
        {
          text: "Sil",
          style: "destructive",
          onPress: () =>
            setOrders((prev) => prev.filter((order) => order.id !== id)),
        },
      ]
    );
  };

  return (
    <View style={styles.Container}>
      {/* <DealerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        type={modalType}
        dealer={selectedDealer}
      /> */}
      <Header />
      <View style={styles.SearchAndAddContainer}>
        <TextInput
          style={styles.SearchBar}
          placeholder="Bir sipariş arayın..."
          placeholderTextColor={"black"}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Pressable onPress={() => handleModalOpen("add")}>
          {({ pressed }) => (
            <Text style={[styles.Text, { opacity: pressed ? 0.5 : 1 }]}>
              Sipariş Ekle
            </Text>
          )}
        </Pressable>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <OrderCard
            date={item.date}
            seller={item.seller}
            payment_method={item.payment_method}
            products={item.products}
            cost={item.cost}
            status={item.status}
            onPressSee={() => handleModalOpen("see", item)}
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
