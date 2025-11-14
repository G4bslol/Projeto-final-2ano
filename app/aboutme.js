import { StyleSheet, Text, View, Image } from "react-native";
import foto from "../assets/foto1.jpg";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sobre Mim</Text>

        <View>
          <Image source={foto} style={styles.foto} />
        </View>

        <View>
          <Text style={styles.subtitle}>Detalhes</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf5d8ff",
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    width: "100%",
  },
  title: {
    position: "absolute",
    top: 20,     // distância do topo
    right: 10,   // distância da borda direita
    fontSize: 60,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 36,
    color: "#888",
    alignItems: "center",
    justifyContent: "center",
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
