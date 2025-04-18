import { ModalType, StorageWorker } from "@/constants/Types";
import { useEffect, useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
} from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  type: ModalType;
  storageWorker?: StorageWorker;
}

export default function StorageWorkerModal({
  visible,
  onClose,
  type,
  storageWorker,
}: Props) {
  const [formValues, setFormValues] = useState<StorageWorker>({
    id: 0,
    first_name: "",
    last_name: "",
    username: "",
    clearance: "",
  });

  useEffect(() => {
    if (type !== "add" && storageWorker) {
      setFormValues(storageWorker);
    } else {
      setFormValues({
        id: 0,
        first_name: "",
        last_name: "",
        username: "",
        clearance: "",
      });
    }
  }, [visible, storageWorker, type]);

  const header =
    type == "add"
      ? "Depocu Ekle"
      : type == "edit"
      ? "Depocu Düzenle"
      : "Depocu Detayları";

  const handleInputChange = (name: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleForm = () => {};

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.Overlay} onPress={onClose}>
        <Pressable onPress={() => {}} style={styles.ModalWrapper}>
          <View style={styles.Container}>
            <View style={styles.HeaderContainer}>
              <Text style={styles.HeaderText}>{header}</Text>
              <Text style={{ fontSize: 16 }} onPress={onClose}>
                X
              </Text>
            </View>
            <TextInput
              style={[{ opacity: type !== "add" ? 1 : 0.5 }, styles.TextInput]}
              placeholder="Ad"
              placeholderTextColor={"black"}
              value={formValues.first_name}
              onChangeText={(value) => handleInputChange("first_name", value)}
              editable={type !== "see"}
            />
            <TextInput
              style={[{ opacity: type !== "add" ? 1 : 0.5 }, styles.TextInput]}
              placeholder="Soyad"
              placeholderTextColor={"black"}
              value={formValues.last_name}
              onChangeText={(value) => handleInputChange("last_name", value)}
              editable={type !== "see"}
            />
            <TextInput
              style={[{ opacity: type !== "add" ? 1 : 0.5 }, styles.TextInput]}
              placeholder="Kullanıcı Adı"
              placeholderTextColor={"black"}
              value={formValues.username}
              onChangeText={(value) => handleInputChange("username", value)}
              editable={type !== "see"}
            />
            <TextInput
              style={[{ opacity: type !== "add" ? 1 : 0.5 }, styles.TextInput]}
              placeholder="Yetki"
              placeholderTextColor={"black"}
              value={formValues.clearance}
              onChangeText={(value) => handleInputChange("clearance", value)}
              editable={type !== "see"}
            />
            <TextInput
              style={[{ opacity: type !== "add" ? 1 : 0.5 }, styles.TextInput]}
              placeholder="Şifre"
              placeholderTextColor={"black"}
              editable={type !== "see"}
            />
            {type !== "see" && (
              <Pressable onPress={() => handleForm()} style={styles.Button}>
                {({ pressed }) => (
                  <Text style={[styles.Text, { opacity: pressed ? 0.5 : 1 }]}>
                    Kaydet
                  </Text>
                )}
              </Pressable>
            )}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  Overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  ModalWrapper: {
    width: "100%",
    alignItems: "center",
  },
  Container: {
    backgroundColor: "white",
    width: "95%",
    height: 350,
    borderRadius: 5,
  },
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  HeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  TextInput: {
    height: 35,
    width: "90%",
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 11,
    paddingLeft: 5,
  },
  Button: {
    marginTop: 18,
    marginHorizontal: 30,
  },
  Text: {
    backgroundColor: "#297be8",
    color: "white",
    borderRadius: 5,
    textAlign: "center",
    width: 80,
    height: 35,
    fontSize: 12,
    paddingVertical: 10,
    alignSelf: "flex-end",
  },
});
