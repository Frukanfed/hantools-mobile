import { Admin, StorageWorker } from "@/constants/Types";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  worker: StorageWorker;
}

export default function StorageWorkerCard({ worker }: Props) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>
          {worker.first_name} {worker.last_name}
        </Text>
        <Text style={styles.username}>{worker.username}</Text>
        <Text style={styles.username}>{worker.clearance}</Text>
      </View>
      <View style={styles.iconContainer}></View>
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
