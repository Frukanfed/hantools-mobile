import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Image, Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function Header() {
  const isAdmin = useSelector((state: any) => state.admin.isAdmin);

  return (
    <View style={styles.Container}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            router.navigate("/");
          }}
        >
          {({ pressed }) => (
            <FontAwesome
              size={20}
              name="chevron-left"
              style={[
                styles.AdminPanelButton,
                { opacity: pressed ? 0.5 : 1, paddingRight: 10 },
              ]}
              color={"gray"}
            />
          )}
        </Pressable>
        <Image
          style={styles.Logo}
          source={require("../assets/images/mainlogo.png")}
        />
      </View>
      {isAdmin && (
        // TODO: ROUTER
        <Pressable
          onPress={() => {
            router.navigate("/adminPanel");
          }}
        >
          {({ pressed }) => (
            <FontAwesome
              size={25}
              name="shield"
              style={[styles.AdminPanelButton, { opacity: pressed ? 0.5 : 1 }]}
              color={"gray"}
            />
          )}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  Logo: {
    width: 110,
    height: 50,
    resizeMode: "contain",
    paddingTop: 30,
  },
  AdminPanelButton: {
    paddingTop: 27,
  },
});
