import { Customer } from "@/constants/Types";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  customer: Customer;
  onPressSee: () => void;
  onPressEdit: () => void;
  onPressDelete: () => void;
}

export default function CustomerCard({
  customer,
  onPressSee,
  onPressEdit,
  onPressDelete,
}: Props) {
  return (
    <View style={styles.Card}>
      <View>
        <Text style={styles.Name}>{customer.name}</Text>
        <Text>{customer.phone}</Text>
        <Text>
          {customer.city} / {customer.district}
        </Text>
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
        <Pressable onPress={onPressEdit}>
          {({ pressed }) => (
            <FontAwesome
              size={22}
              name={"pencil"}
              style={{ marginHorizontal: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
        <Pressable onPress={onPressDelete}>
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
  Name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
