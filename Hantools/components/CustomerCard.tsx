import { View, Text, StyleSheet } from "react-native";

interface Props {
  name: string;
  phone: string;
  city: string;
  district: string;
}

export default function CustomerCard({ name, phone, city, district }: Props) {
  return (
    <View style={styles.Card}>
      <Text style={styles.Name}>{name}</Text>
      <Text>{phone}</Text>
      <Text>
        {city} / {district}
      </Text>
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
  },
  Name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
