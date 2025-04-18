import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isAdmin = useSelector((state: any) => state.admin.isAdmin);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="dealers"
        options={{
          href: !isAdmin ? null : "/(tabs)/dealers",
          title: "Satıcılar",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={27} name="user" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="items"
        options={{
          title: "Ürünler",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={27} name="archive" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="main"
        options={{
          title: "Müşteriler",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={27} name="book" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Siparişler",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={27} name="id-card" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          href: !isAdmin ? null : "/(tabs)/reports",
          title: "Rapor",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={27} name="bar-chart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
