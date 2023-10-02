import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TextInput, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../src/FireBaseConnect.js'

export default function Login() {
    let uid = ''
    const [user, setUser] = useState();
    const [name, setName] = useState();
    const [password, setPass] = useState();
    const [condition, setCondition] = useState(false);

    const navigate = useNavigation();

    const trocartela = () => {
        navigate.reset({
            index: 0,
            routes: [{ name: 'Lista' }]
        })
        navigate.navigate('Lista', { dados: uid})
    }
    async function login() {
        await firebase.auth().signInWithEmailAndPassword(user, password).then((user) => {

            uid = (user.user.uid)
            trocartela()
        }).catch((error) => {
            console.log(error)
        })
    }

    async function cadastro() {
        await firebase.auth().createUserWithEmailAndPassword(user, password).then((user) => {
            firebase.database().ref('User').child(user.user.uid).set({name:name})
            alert("Usuário Cadastrado")
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.imgback}>
                <Image
                    source={require('./img/icon_login100.png')}
                    style={styles.img}
                />
            </View>


            {condition ?
                <View style={{ width: '90%', alignItems: 'flex-start', padding: 2 }}>

                    <Text style={styles.txt}>Digite seu usuário:</Text>

                    <TextInput
                        value={user}
                        onChangeText={(text) => { setUser(text) }}
                        style={styles.txtinp}
                        placeholder='User'
                    />

                    <Text style={styles.txt}>Senha:</Text>

                    <TextInput
                        value={password}
                        onChangeText={(text) => { setPass(text) }}
                        style={styles.txtinp}
                        placeholder='Password'
                        secureTextEntry={true}
                    />

                    <Text style={styles.txt}>Nome:</Text>

                    <TextInput
                        value={name}
                        onChangeText={(text) => { setName(text) }}
                        style={styles.txtinp}
                        placeholder='Nome'
                        secureTextEntry={false}
                    />
                </View>


                :


                <View style={{ width: '90%', alignItems: 'flex-start', padding: 2 }}>

                    <Text style={styles.txt}>Digite seu usuário:</Text>

                    <TextInput
                        value={user}
                        onChangeText={(text) => { setUser(text) }}
                        style={styles.txtinp}
                        placeholder='User'
                    />

                    <Text style={styles.txt}>Senha:</Text>

                    <TextInput
                        value={password}
                        onChangeText={(text) => { setPass(text) }}
                        style={styles.txtinp}
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                </View>}

            {condition ?

                <TouchableOpacity onPress={() => cadastro()} activeOpacity={0.5} style={styles.buttom} >
                    <Text style={styles.txtbuttom}>Cadastro</Text>
                </TouchableOpacity>

                :

                <TouchableOpacity onPress={() => login()} activeOpacity={0.5} style={styles.buttom} >
                    <Text style={styles.txtbuttom}>Entrar</Text>
                </TouchableOpacity>
            }

            <TouchableOpacity onPress={() => setCondition(!condition)} activeOpacity={0.5} style={{ position: 'relative', top: 150 }}>
                {condition ? <Text style={[styles.txtbuttom, { color: '#eb4433', fontSize: 15, textDecorationLine: 'underline' }]}> Entrar </Text> : <Text style={[styles.txtbuttom, { color: '#eb4433', fontSize: 15, textDecorationLine: 'underline' }]}> Cadastre-se </Text>}
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2828',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgback: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#FFF',
        width: 130,
        height: 130,
        paddingRight: 10,
        marginBottom: 30
    },
    img: {
        width: 100,
        height: 100
    },
    txt: {
        color: '#FFF',
        fontSize: 15,
        marginBottom: 2,
        marginLeft: 3
    },
    txtinp: {
        backgroundColor: '#FFF',
        padding: 10,
        width: '100%',
        borderRadius: 7,
        marginBottom: 10
    },
    buttom: {
        backgroundColor: '#eb4433',
        width: '90%',
        marginTop: 8,
        alignItems: 'center', justifyContent: 'center',
        padding: 5,
        borderRadius: 7
    },
    txtbuttom: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22
    },
})