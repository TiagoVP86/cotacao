import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#0b1c2d" },
        }}
      >
        <Drawer.Screen name="index" options={{ title: "Dollar Americano" }} />
        <Drawer.Screen name="eur" options={{ title: "Euro" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
