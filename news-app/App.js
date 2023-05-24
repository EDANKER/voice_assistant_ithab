import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image, onChangeText, Button, ButtonProps} from 'react-native';


export default function App() {
  return (
    <View  style={styles.container}>
        <View style={{}}>
          <Text style={{marginTop: 80, fontSize: 20, marginLeft: 39, fontWeight: 'bold'}}>Добро пожаловать в voice_ithab</Text>
          <TextInput maxLength={40} style={{marginTop: 150, width: 200, height: 50, borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 80 }} onChangeText={onChangeText} value={Text} placeholder="Id-college"></TextInput>
          <TextInput maxLength={40} style={{marginTop: 0, width: 200, height: 50, borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 80 }} onChangeText={onChangeText} value={Text} placeholder="password"></TextInput>
        </View>
        <Image source={require('./assets/pngwing.com.png')} style={{width: 40, height: 40, marginLeft: 10, marginTop: 200}}></Image>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
      },
    });
