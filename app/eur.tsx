import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getEUR } from "../services/awesomeapi";

export default function Screen() {
  const [loading, setLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState<number>(0);

  const updateCurrency = async () => {
    setLoading(true);
    const euro = await getEUR();
    setLoading(false);
    setCurrentValue(euro);
  };

  useEffect(() => {
    updateCurrency();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/euro.png")}
        resizeMode="contain"
        style={styles.logo}
      />

      {loading && <Text style={styles.h2}>Carregando...</Text>}

      {!loading && (
        <>
          <Text style={styles.h2}>O euro está: </Text>
          <Text style={styles.currencyText}>R$ {currentValue.toFixed(2)}</Text>
          <Button label="Atualizar" onPress={updateCurrency} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1c2d",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 200,
    height: 180,
  },

  h2: {
    color: "#ccc",
    fontSize: 24,
    marginTop: 30,
  },

  currencyText: {
    color: "#fff",
    fontSize: 52,
    marginTop: 20,
    marginBottom: 50,
  },
});
