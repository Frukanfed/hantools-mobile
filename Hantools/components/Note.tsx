import { View, Text, StyleSheet } from "react-native";

interface Props {
  author: string;
  note: string;
  date: string;
}

export default function Note({ author, note, date }: Props) {
  return (
    <View style={styles.Container}>
      <Text style={styles.Author}>{author}</Text>
      <Text>{note}</Text>
      <Text style={styles.Date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    backgroundColor: "#b0dce4",
    margin: 5,
    padding: 5,
  },
  Author: {
    fontWeight: "bold",
  },
  Date: { textAlign: "right", fontSize: 13 },
});
