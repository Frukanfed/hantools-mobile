import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { router } from "expo-router";
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
//import actions
import { setAdminStatus, setLoading } from "../redux/store";

const selectAndRoute = (button: boolean, dispatch: any) => {
  if (button) {
    dispatch(setLoading(true));
    // Fake fetch timing
    setTimeout(() => {
      dispatch(setAdminStatus(true));
      dispatch(setLoading(false));
    }, 2000);
  } else {
    dispatch(setAdminStatus(false));
  }
  router.navigate("/(tabs)/main");
};

export default function IndexPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.admin.loading);

  return (
    <View style={styles.Container}>
      {loading ? (
        // Show loading spinner while waiting for fake fetch
        <ActivityIndicator size="large" color="#297be8" />
      ) : (
        <>
          <Pressable
            onPress={() => selectAndRoute(true, dispatch)}
            style={styles.Button}
          >
            {({ pressed }) => (
              <Text style={[styles.Text, { opacity: pressed ? 0.5 : 1 }]}>
                Admin
              </Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => selectAndRoute(false, dispatch)}
            style={styles.Button}
          >
            {({ pressed }) => (
              <Text style={[styles.Text, { opacity: pressed ? 0.5 : 1 }]}>
                User
              </Text>
            )}
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    marginTop: 100,
  },
  Text: {
    width: 100,
    backgroundColor: "#297be8",
    color: "white",
    paddingVertical: 15,
    borderRadius: 5,
    fontSize: 16,
    textAlign: "center",
  },
});
