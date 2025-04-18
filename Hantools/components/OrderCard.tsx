import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  date: string;
  seller: string;
  payment_method: string;
  products: string;
  cost: number;
  status: string;
  onPressSee: () => void;
  onPressDelete: () => void;
}

export default function OrderCard({
  date,
  seller,
  payment_method,
  products,
  cost,
  status,
  onPressSee,
  onPressDelete,
}: Props) {
  return (
    <View style={styles.Card}>
      <View>
        <Text style={styles.Date}>{date}</Text>
        <Text style={styles.Seller}>{seller}</Text>
        <Text style={styles.Status}>{status}</Text>
      </View>
      <View style={styles.Details}>
        <Text style={styles.InfoText}>Ödeme Yöntemi: {payment_method}</Text>
        <Text style={{ fontSize: 12, maxWidth: 150 }}>{products}</Text>
        <Text style={styles.InfoText}>Tutar: {cost.toFixed(2)} TL</Text>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 10 }}>
        <Pressable onPress={onPressSee}>
          {({ pressed }) => (
            <FontAwesome
              size={22}
              name={"eye"}
              style={{ opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
        <Pressable onPress={onPressDelete} style={{ marginLeft: 15 }}>
          {({ pressed }) => (
            <FontAwesome
              size={22}
              name={"trash"}
              style={{ opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    padding: 15,
    marginBottom: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Date: {
    fontWeight: "bold",
    fontSize: 16,
  },
  Seller: {
    fontSize: 14,
    color: "#555",
  },
  Details: {
    marginTop: 10,
  },
  InfoText: {
    fontSize: 14,
    color: "#333",
    marginVertical: 3,
  },
  Status: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ff5f5f",
  },
});
