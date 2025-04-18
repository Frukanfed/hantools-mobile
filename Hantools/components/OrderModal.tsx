import { Order, ModalType } from "@/constants/Types";
import { useEffect, useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import NotesModal from "./NotesModal";

interface Props {
  visible: boolean;
  onClose: () => void;
  type: ModalType;
  order?: Order;
}

export default function OrderModal({ visible, onClose, type, order }: Props) {
  const [isNotesModalVisible, setIsNotesModalVisible] =
    useState<boolean>(false);
  const [formValues, setFormValues] = useState<Order>({
    id: 0,
    date: "",
    seller: "",
    payment_method: "",
    products: "",
    cost: 0.0,
    status: "",
    city: "",
    district: "",
    address: "",
    taxNumber: 0,
    taxOffice: "",
    billingAddress: "",
  });

  useEffect(() => {
    if (type !== "add" && order) {
      setFormValues(order);
    } else {
      setFormValues({
        id: 0,
        date: "",
        seller: "",
        payment_method: "",
        products: "",
        cost: 0.0,
        status: "",
        city: "",
        district: "",
        address: "",
        taxNumber: 0,
        taxOffice: "",
        billingAddress: "",
      });
    }
  }, [visible, order, type]);

  const header =
    type === "add"
      ? "Sipariş Ekle"
      : type === "edit"
      ? "Sipariş Düzenle"
      : "Sipariş Detayları";

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
            <ScrollView contentContainerStyle={styles.ScrollViewContent}>
              <Text style={styles.SubheaderText}>Müşteri Bilgileri</Text>
              <TextInput
                style={[
                  { opacity: type !== "add" ? 1 : 0.5 },
                  styles.TextInput,
                ]}
                placeholder="Satıcı"
                placeholderTextColor={"black"}
                value={formValues.seller}
                onChangeText={(value) => handleInputChange("seller", value)}
                editable={type !== "see"}
              />
              <Text style={styles.SubheaderText}>Ürünler</Text>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={[
                    { opacity: type !== "add" ? 1 : 0.5 },
                    styles.ItemTextInput,
                  ]}
                  placeholder="Ürün"
                  placeholderTextColor={"black"}
                  value={formValues.products}
                  onChangeText={(value) => handleInputChange("products", value)}
                  editable={type !== "see"}
                />
                <TextInput
                  style={[
                    { opacity: type !== "add" ? 1 : 0.5 },
                    styles.ItemCountTextInput,
                  ]}
                  placeholder="1"
                  placeholderTextColor={"black"}
                  editable={type !== "see"}
                  keyboardType="numeric"
                />
              </View>
              <Text style={styles.SubheaderText}>Ödeme ve Durum</Text>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={[
                    { opacity: type !== "add" ? 1 : 0.5 },
                    styles.ItemTextInput,
                  ]}
                  placeholder="Ödeme Yöntemi"
                  placeholderTextColor={"black"}
                  value={formValues.payment_method}
                  onChangeText={(value) =>
                    handleInputChange("payment_method", value)
                  }
                  editable={type !== "see"}
                />
                <TextInput
                  style={[
                    { opacity: type !== "add" ? 1 : 0.5 },
                    styles.ItemTextInput,
                  ]}
                  placeholder="Durum"
                  placeholderTextColor={"black"}
                  value={formValues.status}
                  onChangeText={(value) => handleInputChange("status", value)}
                  editable={type !== "see"}
                />
              </View>
              <TextInput
                style={[
                  { opacity: type !== "add" ? 1 : 0.5 },
                  styles.TextInput,
                ]}
                placeholder="Tutar"
                placeholderTextColor={"black"}
                value={formValues.cost === 0.0 ? "" : String(formValues.cost)}
                onChangeText={(value) => handleInputChange("cost", value)}
                keyboardType="numeric"
                editable={type !== "see"}
              />
              <Text style={styles.SubheaderText}>Adres Bilgileri</Text>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={[
                    { opacity: type != "add" ? 1 : 0.5 },
                    styles.ItemTextInput,
                  ]}
                  placeholder="İl"
                  placeholderTextColor={"black"}
                  value={formValues.city}
                  onChangeText={(value) => handleInputChange("city", value)}
                  editable={type !== "see"}
                />
                <TextInput
                  style={[
                    { opacity: type != "add" ? 1 : 0.5 },
                    styles.ItemTextInput,
                  ]}
                  placeholder="İlçe"
                  placeholderTextColor={"black"}
                  value={formValues.district}
                  onChangeText={(value) => handleInputChange("district", value)}
                  editable={type !== "see"}
                />
              </View>
              <TextInput
                style={[{ opacity: type != "add" ? 1 : 0.5 }, styles.TextInput]}
                placeholder="Adres"
                placeholderTextColor={"black"}
                value={formValues.address}
                onChangeText={(value) => handleInputChange("address", value)}
                editable={type !== "see"}
              />
              <Text style={styles.SubheaderText}>Fatura Bilgileri</Text>
              <TextInput
                style={[{ opacity: type != "add" ? 1 : 0.5 }, styles.TextInput]}
                placeholder="Vergi Numarası"
                placeholderTextColor={"black"}
                value={
                  formValues.taxNumber == 0 ? "" : String(formValues.taxNumber)
                }
                onChangeText={(value) => handleInputChange("taxNumber", value)}
                keyboardType="numeric"
                editable={type !== "see"}
              />
              <TextInput
                style={[{ opacity: type != "add" ? 1 : 0.5 }, styles.TextInput]}
                placeholder="Vergi Dairesi"
                placeholderTextColor={"black"}
                value={formValues.taxOffice}
                onChangeText={(value) => handleInputChange("taxOffice", value)}
                editable={type !== "see"}
              />
              <TextInput
                style={[{ opacity: type != "add" ? 1 : 0.5 }, styles.TextInput]}
                placeholder="Fatura Adresi"
                placeholderTextColor={"black"}
                value={formValues.billingAddress}
                onChangeText={(value) =>
                  handleInputChange("billingAddress", value)
                }
                editable={type !== "see"}
              />
              <View style={styles.ButtonsContainer}>
                <Pressable onPress={() => setIsNotesModalVisible(true)}>
                  {({ pressed }) => (
                    <Text style={[styles.Text, { opacity: pressed ? 0.5 : 1 }]}>
                      Notlar
                    </Text>
                  )}
                </Pressable>
                {type !== "see" && (
                  <Pressable onPress={() => handleForm()}>
                    {({ pressed }) => (
                      <Text
                        style={[styles.Text, { opacity: pressed ? 0.5 : 1 }]}
                      >
                        Kaydet
                      </Text>
                    )}
                  </Pressable>
                )}
              </View>
            </ScrollView>
          </View>
        </Pressable>
      </Pressable>
      <NotesModal
        visible={isNotesModalVisible}
        onClose={() => setIsNotesModalVisible(false)}
      />
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
    maxHeight: 500,
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
    marginBottom: 10,
  },
  ScrollViewContent: {
    paddingBottom: 20,
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
  ItemTextInput: {
    height: 35,
    width: "43.5%",
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 11,
    paddingLeft: 5,
  },
  ItemCountTextInput: {
    height: 35,
    width: 35,
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 11,
    textAlign: "center",
  },
  ButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 10,
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
