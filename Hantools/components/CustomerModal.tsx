import { Customer, ModalType } from "@/constants/Types";
import { useState } from "react";
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
}

export default function CustomerModal({ visible, onClose, type }: Props) {
  const [formValues, setFormValues] = useState<Customer>({
    id: 0,
    name: "",
    phone: 0,
    city: "",
    district: "",
    address: "",
    taxNumber: 0,
    taxOffice: "",
    billingAddress: "",
  });

  const header =
    type == "add"
      ? "Müşteri Ekle"
      : type == "edit"
      ? "Müşteri Düzenle"
      : "Müşteri Detayları";

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
            <Text style={styles.SubheaderText}>Müşteri Bilgileri</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Ad Soyad"
              placeholderTextColor={"black"}
              value={formValues.name}
              onChangeText={(value) => handleInputChange("name", value)}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Telefon"
              placeholderTextColor={"black"}
              value={formValues.phone == 0 ? "" : String(formValues.phone)}
              onChangeText={(value) => handleInputChange("phone", value)}
              keyboardType="numeric"
              maxLength={10}
            />
            <Text style={styles.SubheaderText}>Adres Bilgileri</Text>
            <View style={styles.CityDistrictContainer}>
              <TextInput
                style={styles.CityDistrictTextInput}
                placeholder="İl"
                placeholderTextColor={"black"}
                value={formValues.city}
                onChangeText={(value) => handleInputChange("city", value)}
              />
              <TextInput
                style={styles.CityDistrictTextInput}
                placeholder="İlçe"
                placeholderTextColor={"black"}
                value={formValues.district}
                onChangeText={(value) => handleInputChange("district", value)}
              />
            </View>
            <TextInput
              style={styles.TextInput}
              placeholder="Adres"
              placeholderTextColor={"black"}
              value={formValues.address}
              onChangeText={(value) => handleInputChange("address", value)}
            />
            <Text style={styles.SubheaderText}>Fatura Adresi Bilgileri</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Vergi Numarasi"
              placeholderTextColor={"black"}
              value={
                formValues.taxNumber == 0 ? "" : String(formValues.taxNumber)
              }
              onChangeText={(value) => handleInputChange("taxNumber", value)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Vergi Dairesi"
              placeholderTextColor={"black"}
              value={formValues.taxOffice}
              onChangeText={(value) => handleInputChange("taxOffice", value)}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Fatura Adresi"
              placeholderTextColor={"black"}
              value={formValues.billingAddress}
              onChangeText={(value) =>
                handleInputChange("billingAddress", value)
              }
            />
            {type != "see" && (
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
    height: 500,
    borderRadius: 5,
  },
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  HeaderText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  SubheaderText: {
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginTop: 15,
  },
  TextInput: {
    height: 35,
    width: "90%",
    marginLeft: 10,
    marginTop: 10,
    opacity: 0.5,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 11,
    paddingLeft: 5,
  },
  CityDistrictContainer: {
    flexDirection: "row",
  },
  CityDistrictTextInput: {
    height: 35,
    width: "43.5%",
    marginLeft: 10,
    marginTop: 10,
    opacity: 0.5,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 11,
    paddingLeft: 5,
  },
  Button: {
    marginTop: 10,
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
