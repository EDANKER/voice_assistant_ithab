import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, onChangeText, Button, StyleSheet} from 'react-native';
import { Post } from './component/Post';



export default function App() {
  return (
    <View  style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 70, alignItems: 'flex-end', justifyContent: 'flex-end', gap: 10}}>
            <Button title='тема' color={'black'} style={{}}></Button>
            <Button title='Регистрация' color={'black'} style={{}}></Button>
          </View>
          {/* <Text style={{marginTop: 80, fontSize: 20, marginLeft: 32, fontWeight: 'bold'}}>Добро пожаловать в voice <Text style={{borderBottomColor: "black", borderTopLeftRadius: 2}}>ithab</Text></Text> */}
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'boid', marginTop: 170, alignItems: 'flex-end', justifyContent: 'flex-end',}}>Вход</Text>
          <TextInput  maxLength={40} style={{marginTop: 50, width: 200, height: 50, borderBottomColor: 'black', borderBottomWidth: 1,  }} onChangeText={onChangeText} value={Text} placeholder="Id-college"></TextInput>
          <TextInput  maxLength={40} style={{marginTop: 30, width: 200, height: 50, borderBottomColor: 'black', borderBottomWidth: 1,  }} onChangeText={onChangeText} value={Text} placeholder="password"></TextInput>
          </View>
          <View style={{marginTop: 50, padding: 45}}>
            <Button title='Вход' color={"#151719"} style={{ marginTop: 30}}></Button>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Image source={require('./assets/pngwing.com.png')} style={{width: 40, height: 40, marginLeft: 10, marginTop: 160}}></Image>  
          </View>
          <Text></Text>
          <StatusBar theme="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: '#FFFFF0',
    flexDirection: 'column'
      },
    });
