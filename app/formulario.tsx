import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function TelaFormulario() {
    const [usuario, setUsuario] = useState<any>({})
    const [erros, setErros] = useState<any>({})

    function salvar() {
        AsyncStorage.setItem('usuario', JSON.stringify(usuario))
    }

    return (
        <View style={styles.centralizado}>
            <Text>Formulário</Text>
            <TextInput
                placeholder="Nome"
                value={usuario.nome ?? ''}
                style={[styles.input, erros.nome && styles.inputError]}
                onChangeText={(nome) => setUsuario({ ...usuario, nome })}
            />
            {erros.nome && <Text style={{ color: 'red' }}>{erros.nome}</Text>}
            <Botao onPress={salvar}>
                <Text style={{ color: '#fff'}}>Salvar</Text>
            </Botao>
        </View>
    )
}