// NotesModal.tsx

import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import Note from "./Note";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function NotesModal({ visible, onClose }: Props) {
  const handleForm = () => {};

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.Overlay} onPress={onClose}>
        <Pressable style={styles.ModalWrapper} onPress={() => {}}>
          <View style={styles.Container}>
            <View style={styles.HeaderContainer}>
              <Text style={styles.HeaderText}>Notlar</Text>
              <Text style={{ fontSize: 16 }} onPress={onClose}>
                X
              </Text>
            </View>
            <Text style={styles.SubheaderText}>Mevcut Notlar</Text>
            <Note
              author="Leon Kennedy"
              note="Arthur Morgan was a bad man."
              date="17/4/2025 13.56"
            />
            <Note
              author="Leon Kennedy"
              note="Arthur Morgan was a weird man."
              date="17/4/2025 13.56"
            />
            <Note
              author="Leon Kennedy"
              note="Who tf is Arthur Morgan?"
              date="17/4/2025 13.56"
            />
            <Text style={styles.SubheaderText}>Yeni Not Ekle</Text>
            <TextInput
              style={styles.Input}
              placeholder="Notunuzu yazın..."
              placeholderTextColor={"black"}
            />
            <Pressable onPress={() => handleForm()}>
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
  Input: {
    height: 60,
    width: "90%",
    marginLeft: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 11,
    paddingLeft: 5,
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
    margin: 5,
  },
});
