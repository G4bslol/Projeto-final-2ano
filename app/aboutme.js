import { StyleSheet, Text, View, Image, Button } from "react-native";
import foto from "../assets/foto1.jpg";
import fotoprof from "../assets/fotoprof.jpg";

export default function Page() {
  return (
    <View style={styles.container}>
      {/* FOTO DO PEROSSO */}
      <View style={styles.foto}>
        <Image source={foto} style={styles.foto} />
      </View>

      {/* FOTO DO GRAZZIANI */}

      <View style={styles.fotogra}>
        <Image source={fotoprof} style={styles.fotogragra}/>
      </View>

      
      {/* TÍTULO NO CANTO DIREITO */}

      <View style={styles.headerRight}>
        <Text style={styles.title}>Informações</Text>
      </View>
      
      {/* CONTEÚDO CENTRAL */}

      <View style={styles.main}>

        <Text style={styles.subtitle}>Detalhes</Text>
        <Text style={styles.textonchamativo}>Nome: João Victor Perosso Alves</Text>
        <Text style={styles.textonchamativo}>Idade: 17</Text>
        <Text style={styles.textonchamativo}>Sexo: Masculino</Text>
        <Text style={styles.textonchamativo}>Curso: Informática</Text>

      </View>

      {/* ESCRITAS DO FOTO DE PERFIL */}

      <View>
        <Text style={styles.perfil}>Foto de perfil</Text>
        <Text style={styles.perfilgra}>Foto do Professor</Text>
      </View>

      {/* TEMAS */}

      <View style={styles.temas}>

        <Text style={styles.temasconfg}>Temas</Text>
        <Text style={styles.ostemas}>Gastronomia e suas etiquetas</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    padding: 24,
    alignItems: "center",
  
  },

  headerRight: {
    position: "absolute",
    top: 20,
    right: 200,
  
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
  
  },

  main: {
    flex: 1,     
    width: "100%",
    top: 80
  
  },

  subtitle: {
    fontSize: 36,
    color: "#303030ff",
    textAlign: "center",
    marginBottom: 10,
  
  },

  textonchamativo: {
    fontSize: 20,
    color: "#555555ff",
    marginTop: 5,
  
  },

  foto: {
    width: 150,
    height: 150,
    borderRadius: 73,
    marginBottom: 20,
    top: 30,
    right: 68,
  
  },
  
  perfil: {
    top: -380,
    right: 140,
    color: "#222222ff"
  
  },

  temas: {
    position: "absolute",
    top: 480,
    justifyContent: "center",
    alignItems: "center"

  },

  temasconfg:{
    fontSize: 36,
    color: "#333333ff"
  },

  ostemas: {
    color: "#555555ff",
    fontSize: 25,
    top: 10,
    justifyContent: "center",
    textAlign: "center"
  
  },
  fotogra: {
    position: "absolute",
    top: 80,
    right: 19

  },
  fotogragra: {
    width: 160,
    height: 160,
    borderRadius: 78,
    marginBottom: 20,

  },
  perfilgra: {
    position: "absolute",
    bottom: 380,
    left: 110,
    color: "#222222ff"

  }
});