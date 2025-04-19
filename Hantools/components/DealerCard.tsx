import { Dealer } from "@/constants/Types";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  dealer: Dealer;
  onPressEdit: () => void;
  onPressDelete: () => void;
}

export default function DealerCard({
  dealer,
  onPressEdit,
  onPressDelete,
}: Props) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>
          {dealer.first_name} {dealer.last_name}
        </Text>
        <Text style={styles.username}>{dealer.username}</Text>
        <Text style={styles.phone}>{dealer.phone}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={onPressEdit}>
          {({ pressed }) => (
            <FontAwesome
              size={22}
              name={"pencil"}
              style={[
                styles.icon,
                { marginHorizontal: 15, opacity: pressed ? 0.5 : 1 },
              ]}
            />
          )}
        </Pressable>
        <Pressable onPress={onPressDelete}>
          {({ pressed }) => (
            <FontAwesome
              size={22}
              name={"trash"}
              style={[styles.icon, { opacity: pressed ? 0.5 : 1 }]}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  username: {
    fontSize: 14,
    color: "#666",
  },
  phone: {
    fontSize: 14,
    color: "#333",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});
