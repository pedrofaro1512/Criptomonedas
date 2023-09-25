import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

const Header = () => <Text style={styles.encabezado}>Criptomonedas</Text>;

const styles = StyleSheet.create({
  encabezado: {
    padding: Platform.OS === "ios" ? 50 : 30,
    backgroundColor: "#5E49E2",
    paddingBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 30,
  },
});

export default Header;
