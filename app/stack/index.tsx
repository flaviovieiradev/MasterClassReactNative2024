import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function TabInicial() {
    return (
        <View style={[styles.centralizado, { gap:10 }]}>
            <Text>Tab Inicial</Text>
            <Botao>
                <Link href='/stack\nova' style={{ color: '#fff'}} >
                    Ir para Tela Nova
                </Link>
            </Botao>

            <Botao>
                <Link href='/' style={{ color: '#fff'}} >
                    ir para o Início
                </Link>
            </Botao>
        </View>
    )
}