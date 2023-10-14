import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function SignIn() {
 return (
   <View style={styles.container}>
    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}/* BLOCO DOS CAMPOS */>
        <Text style={styles.message}>Login</Text>
    </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>E-mail</Text>
            <TextInput 
            placeholder="Digite seu e-mail."
            style={styles.input}
            />

        <Text style={styles.title}>Senha</Text>
            <TextInput 
            placeholder="Digite sua senha."
            style={styles.input}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>

        </Animatable.View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    containerForm:{
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28
    },
    input:{
        borderRadius: 6,
        backgroundColor: '#F3F6F6',
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button:{
        backgroundColor: '#7D9C3E',
        width: '40%',
        borderRadius: 100,
        paddingVertical: 8,
        marginTop: 19,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText:{
        color: 'black',
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#a1a1a1'
    }
})