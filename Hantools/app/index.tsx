import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { router } from "expo-router";
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ImageBackground,
  Image,
} from "react-native";
//import actions
import { setAdminStatus, setLoading } from "../redux/store";

const selectAndRoute = (button: boolean, dispatch: any) => {
  dispatch(setLoading(true));
  setTimeout(() => {
    if (button) {
      dispatch(setAdminStatus(true));
    } else {
      dispatch(setAdminStatus(false));
    }
    router.navigate("/(tabs)/main");
    dispatch(setLoading(false));
  }, 2000);
};

export default function IndexPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.admin.loading);
  const isAdmin = useSelector((state: any) => state.admin.isAdmin);

  useEffect(() => {}, [isAdmin, loading]);

  return (
    <View style={{ backgroundColor: "white" }}>
      <Image
        style={styles.Logo}
        source={require("../assets/images/mainlogo.png")}
      />
      <ImageBackground
        source={""}
        style={styles.Container}
        imageStyle={styles.BackgroundImage}
      >
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
      </ImageBackground>
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
  BackgroundImage: {
    width: "100%",
    height: "90%",
  },
  Logo: {
    width: 110,
    height: 50,
    resizeMode: "contain",
    marginLeft: 10,
  },
  Button: {
    marginTop: 50,
    marginBottom: 40,
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
