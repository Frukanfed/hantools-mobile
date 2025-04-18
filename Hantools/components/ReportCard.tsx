import { View, Text, StyleSheet, Pressable } from "react-native";
import { Report } from "../constants/Types";

interface Props {
  report: Report;
}

export default function ReportCard({ report }: Props) {
  return (
    <View style={styles.Card}>
      <Text style={styles.Name}>{report.dealer}</Text>
      <Text>İşlem: {report.action}</Text>
      <Text>Ürün: {report.product}</Text>
      <Text>Tutar: {report.amount}</Text>
      <Text>Müşteri: {report.customer}</Text>
      <Text style={{ textAlign: "right" }}>{report.date}</Text>
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
    justifyContent: "space-between",
  },
  Name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
