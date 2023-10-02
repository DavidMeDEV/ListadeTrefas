import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useRoute, useNavigation} from '@react-navigation/native';

import firebase from '../../src/FireBaseConnect.js';


export default function Lista() {

  const [dados, setDado] = useState('')
  const route = useRoute()
  const navigate=useNavigation()
  let dado = (route.params?.dados)
  let name=''
  useEffect(()=>{
    async function getName(){
      console.log(dado)
      await firebase.database().ref(`User/${dado}/name`).on('value', (snapshot)=>{
        setDado(snapshot.val());
      });

    }

    getName();

  },[])


  return (
    <View style={styles.container}>
      <Text>nome aqui:{dados}</Text>
    </View>
  );
}

const styles=StyleSheet.create({

  container:{

      flex:1,
      alignItems:'center',
      justifyContent:'center'
  }
})