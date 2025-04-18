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
}

export default function AnnouncementModal({ visible, onClose }: Props) {
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
              <Text style={styles.HeaderText}>Duyuru Oluştur</Text>
              <Text style={{ fontSize: 16 }} onPress={onClose}>
                X
              </Text>
            </View>
            <TextInput
              style={[, styles.TextInput]}
              placeholder="Duyuru Mesajı..."
              placeholderTextColor={"black"}
            />

            <Pressable onPress={() => handleForm()} style={styles.Button}>
              {({ pressed }) => (
                <Text style={[styles.Text, { opacity: pressed ? 0.5 : 1 }]}>
                  Gönder
                </Text>
              )}
            </Pressable>
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
    height: 230,
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
    height: 100,
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
