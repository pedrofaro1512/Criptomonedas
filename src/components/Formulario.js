import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Formulario = () => {
  return (
    <View>
      <Text style={styles.label}>Moneda</Text>

      <Text style={styles.label}>Criptomoneda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    textTransform: "uppercase",
    fontSize: 22,
    marginVertical: 20,
    fontWeight: "bold",
  },
});

export default Formulario;
