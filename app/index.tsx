import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native"; 

export default function Index() {
  const nav = useNavigation()
  return (
    <View style={[styles.centralizado, { gap: 10 }]}>
      <Ionicons name="logo-react" size={100} />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 700 }}> Aulas de React-Native </Text>
        <Text style={{ fontSize: 16 }}> Professor Mário de Jesus </Text>
      </View>

      <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer)}>
        <Text style={{color:'#ffffff'}}> Exercícios </Text>
      </Botao>
    </View>
  );
}