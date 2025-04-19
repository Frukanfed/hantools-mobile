import { Item, ModalType } from "@/constants/Types"; // Update import to Item type
import { useEffect, useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

interface Props {
  visible: boolean;
  onClose: () => void;
  type: ModalType;
  item?: Item;
}

export default function ItemModal({ visible, onClose, type, item }: Props) {
  const isAdmin = useSelector((state: any) => state.admin.isAdmin);
  const [formValues, setFormValues] = useState<Item>({
    id: 0,
    code: "",
    name: "",
    stock: false,
    buying_price: 0,
    consignment: 0,
    selling_price: 0,
    tl_price: 0,
    payment_types: [],
  });

  useEffect(() => {
    if (type !== "add" && item) {
      setFormValues(item);
    } else {
      setFormValues({
        id: 0,
        code: "",
        name: "",
        stock: false,
        buying_price: 0,
        consignment: 0,
        selling_price: 0,
        tl_price: 0,
        payment_types: [],
      });
    }
  }, [visible, item, type]);

  const header =
    type === "add"
      ? "Ürün Ekle"
      : type === "edit"
      ? "Ürün Düzenle"
      : "Ürün Detayları";

  const handleInputChange = (
    name: string,
    value: string | boolean | number
  ) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const togglePaymentType = (type: string) => {
    setFormValues((prevValues) => {
      const updatedPaymentTypes = prevValues.payment_types.includes(type)
        ? prevValues.payment_types.filter((t) => t !== type)
        : [...prevValues.payment_types, type];

      return { ...prevValues, payment_types: updatedPaymentTypes };
    });
  };

  const toggleStock = () => {
    if (type != "see") {
      setFormValues((prevValues) => ({
        ...prevValues,
        stock: !prevValues.stock,
      }));
    }
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
            <Text style={styles.SubheaderText}>Ürün Bilgileri</Text>

            <TextInput
              style={[{ opacity: type !== "add" ? 1 : 0.5 }, styles.TextInput]}
              placeholder="Ürün Kodu"
              placeholderTextColor={"black"}
              value={formValues.code}
              onChangeText={(value) => handleInputChange("code", value)}
              editable={type !== "see"}
            />

            <TextInput
              style={[{ opacity: type !== "add" ? 1 : 0.5 }, styles.TextInput]}
              placeholder="Ürün Adı"
              placeholderTextColor={"black"}
              value={formValues.name}
              onChangeText={(value) => handleInputChange("name", value)}
              editable={type !== "see"}
            />
            {isAdmin && (
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={[
                    { opacity: type !== "add" ? 1 : 0.5 },
                    styles.PriceTextInput,
                  ]}
                  placeholder="Alış Fiyatı"
                  placeholderTextColor={"black"}
                  value={
                    formValues.buying_price === 0
                      ? ""
                      : String(formValues.buying_price)
                  }
                  onChangeText={(value) =>
                    handleInputChange("buying_price", parseFloat(value))
                  }
                  keyboardType="numeric"
                  editable={type !== "see"}
                />
                <TextInput
                  style={[
                    { opacity: type !== "add" ? 1 : 0.5 },
                    styles.PriceTextInput,
                  ]}
                  placeholder="Satış Fiyatı"
                  placeholderTextColor={"black"}
                  value={
                    formValues.selling_price === 0
                      ? ""
                      : String(formValues.selling_price)
                  }
                  onChangeText={(value) =>
                    handleInputChange("selling_price", parseFloat(value))
                  }
                  keyboardType="numeric"
                  editable={type !== "see"}
                />
              </View>
            )}

            <TextInput
              style={[{ opacity: type !== "add" ? 1 : 0.5 }, styles.TextInput]}
              placeholder="Konsinye"
              placeholderTextColor={"black"}
              value={
                formValues.consignment === 0
                  ? ""
                  : String(formValues.consignment)
              }
              onChangeText={(value) =>
                handleInputChange("consignment", parseFloat(value))
              }
              keyboardType="numeric"
              editable={type !== "see"}
            />

            {isAdmin && (
              <TextInput
                style={[
                  { opacity: type !== "add" ? 1 : 0.5 },
                  styles.TextInput,
                ]}
                placeholder="TL Fiyatı"
                placeholderTextColor={"black"}
                value={
                  formValues.tl_price === 0 ? "" : String(formValues.tl_price)
                }
                onChangeText={(value) =>
                  handleInputChange("tl_price", parseFloat(value))
                }
                keyboardType="numeric"
                editable={type !== "see"}
              />
            )}

            <Text style={styles.SubheaderText}>
              Ödeme Yöntemleri (İşaretlemek İçin Tıklayın)
            </Text>
            <View style={styles.CheckboxContainer}>
              <TouchableOpacity
                style={[styles.Checkbox]}
                onPress={() =>
                  type != "see" ? togglePaymentType("Kredi Kartı") : {}
                }
              >
                <Text style={styles.CheckboxText}>Kredi Kartı</Text>
                {formValues.payment_types.includes("Kredi Kartı") && (
                  <Text style={styles.Checked}>✔</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.Checkbox]}
                onPress={() => (type != "see" ? togglePaymentType("Han") : {})}
              >
                <Text style={styles.CheckboxText}>Han</Text>
                {formValues.payment_types.includes("Han") && (
                  <Text style={styles.Checked}>✔</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.Checkbox]}
                onPress={() =>
                  type != "see" ? togglePaymentType("Nejat") : {}
                }
              >
                <Text style={styles.CheckboxText}>Nejat</Text>
                {formValues.payment_types.includes("Nejat") && (
                  <Text style={styles.Checked}>✔</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity style={[styles.Checkbox]} onPress={toggleStock}>
                <Text style={styles.CheckboxText}>Stokta</Text>
                {formValues.stock && <Text style={styles.Checked}>✔</Text>}
              </TouchableOpacity>
            </View>

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
    maxHeight: 500,
    borderRadius: 5,
    paddingBottom: 10,
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
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 11,
    paddingLeft: 5,
  },
  PriceTextInput: {
    height: 35,
    width: "43.5%",
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 11,
    paddingLeft: 5,
  },
  CheckboxContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  Checkbox: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    justifyContent: "center",
  },
  CheckboxText: {
    fontSize: 14,
  },

  Checked: {
    fontSize: 16,
    color: "black",
    marginLeft: 5,
    borderWidth: 1,
  },
  Button: {
    marginVertical: 10,
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
