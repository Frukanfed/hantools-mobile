import { Item } from "@/constants/Types";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";

interface Props {
  item: Item;
  onPressSee: () => void;
  onPressEdit: () => void;
}

export default function ItemCard({ item, onPressSee, onPressEdit }: Props) {
  const isAdmin = useSelector((state: any) => state.admin.isAdmin);

  return (
    <View style={styles.Card}>
      <View>
        <Text style={styles.Name}>{item.name}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Kod: {item.code}</Text>
          <Text>Stokta {item.stock ? "Var" : "Yok"}</Text>
        </View>
        {isAdmin && (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Alış: {item.buying_price}</Text>
            <Text>Satış: {item.selling_price}</Text>
          </View>
        )}
        <Text>Konsinye: {item.consignment}</Text>
        {isAdmin && <Text>TL Karşılığı: {item.tl_price} TL</Text>}
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
        {isAdmin && (
          <Pressable onPress={onPressEdit}>
            {({ pressed }) => (
              <FontAwesome
                size={22}
                name={"pencil"}
                style={{ marginHorizontal: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        )}
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
    width: 250,
  },
});
