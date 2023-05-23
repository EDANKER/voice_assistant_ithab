import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, StyleSheet} from 'react-native';


export default function App() {
  return (
    <View  style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const TextInputExempel = () => {
    const [text, onChamgeText] = React.useState('Id');

    return (
      <SafeAreaView>
        <TextInput>
          style={styles.input}
          onChamgeText={onChamgeText}
          value={text}
        </TextInput>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
