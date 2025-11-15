import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Obrigatório</Text>
        <Text style={styles.subtitle}>this is my egg</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#EAEAEA"
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D"
  }
})