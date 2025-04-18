import FetchAllAdmins from "@/api-functions/fetchAllAdmins";
import FetchAllStorageWorkers from "@/api-functions/fetchAllStorageWorkers";
import AdminCard from "@/components/AdminCard";
import AdminModal from "@/components/AdminModal";
import AnnouncementModal from "@/components/AnnouncementModal";
import Header from "@/components/Header";
import StorageWorkerCard from "@/components/StorageWorkerCard";
import StorageWorkerModal from "@/components/StorageWorkerModal";
import { Admin, ModalType, StorageWorker } from "@/constants/Types";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Alert,
  Pressable,
} from "react-native";

export default function AdminPanel() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [storageWorkers, setStorageWorkers] = useState<StorageWorker[]>([]);
  const [modalAdminVisible, setModalAdminVisible] = useState(false);
  const [modalWorkerVisible, setModalWorkerVisible] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("see");
  const [modalAnnouncementVisible, setModalAnnouncementVisible] =
    useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | undefined>(
    undefined
  );

  useEffect(() => {
    getData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [])
  );

  const handleAdminModalOpen = (type: ModalType, admin?: Admin) => {
    setModalType(type);
    setSelectedAdmin(admin);
    setModalAdminVisible(true);
  };
  const handleWorkerModalOpen = () => {
    setModalType("add");
    setModalWorkerVisible(true);
  };

  const handleDeleteAdmin = (id: number) => {
    Alert.alert(
      "Yönetici Sil",
      "Bu müşteriyi silmek istediğinize emin misiniz?",
      [
        { text: "İptal", style: "cancel" },
        {
          text: "Sil",
          style: "destructive",
          onPress: () =>
            setAdmins((prev) => prev.filter((admin) => admin.id !== id)),
        },
      ]
    );
  };

  const getData = () => {
    const fetchedAdmins = FetchAllAdmins();
    const fetchedStorageWorkers = FetchAllStorageWorkers();
    setAdmins(fetchedAdmins);
    setStorageWorkers(fetchedStorageWorkers);
  };

  return (
    <View style={styles.Container}>
      <AdminModal
        visible={modalAdminVisible}
        onClose={() => setModalAdminVisible(false)}
        type={modalType}
        admin={selectedAdmin}
      />
      <StorageWorkerModal
        visible={modalWorkerVisible}
        onClose={() => setModalWorkerVisible(false)}
        type={modalType}
      />
      <AnnouncementModal
        visible={modalAnnouncementVisible}
        onClose={() => setModalAnnouncementVisible(false)}
      />
      <Header />
      <Text style={styles.Header}>Yönetici Paneli</Text>
      <View style={styles.ButtonsContainer}>
        <Pressable onPress={() => handleAdminModalOpen("add")}>
          {({ pressed }) => (
            <Text style={[styles.ButtonText, { opacity: pressed ? 0.5 : 1 }]}>
              Yönetici Ekle
            </Text>
          )}
        </Pressable>
        <Pressable onPress={handleWorkerModalOpen}>
          {({ pressed }) => (
            <Text style={[styles.ButtonText, { opacity: pressed ? 0.5 : 1 }]}>
              Depocu Ekle
            </Text>
          )}
        </Pressable>
        <Pressable onPress={() => setModalAnnouncementVisible(true)}>
          {({ pressed }) => (
            <Text style={[styles.ButtonText, { opacity: pressed ? 0.5 : 1 }]}>
              Duyuru Oluştur
            </Text>
          )}
        </Pressable>
      </View>
      <Text style={styles.Subheader}>Yöneticiler</Text>
      <FlatList
        style={{ minHeight: 300 }}
        data={admins}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <AdminCard
            admin={item}
            onPressEdit={() => handleAdminModalOpen("edit", item)}
            onPressDelete={() => handleDeleteAdmin(item.id)}
          />
        )}
      />

      <Text style={styles.Subheader}>Depocular</Text>
      <FlatList
        data={storageWorkers}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <StorageWorkerCard worker={item} />}
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
  Header: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 20,
  },
  ButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  ButtonText: {
    backgroundColor: "#297be8",
    color: "white",
    borderRadius: 5,
    textAlign: "center",
    width: 90,
    height: 35,
    fontSize: 12,
    paddingVertical: 9,
  },
  Subheader: {
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.6,
    borderBottomWidth: 1,
    marginRight: 10,
    paddingTop: 10,
  },
});
