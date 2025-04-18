import { ModalType } from "@/constants/Types";
import { Modal, View, StyleSheet, Text, Pressable } from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  type: ModalType;
}

export default function CustomerModal({ visible, onClose, type }: Props) {
  const header =
    type == "add"
      ? "Müşteri Ekle"
      : type == "edit"
      ? "Müşteri Düzenle"
      : "Müşteri Detayları";

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
    fontSize: 16,
    fontWeight: "bold",
  },
});
