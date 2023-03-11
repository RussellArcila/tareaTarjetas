import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Year from './components/info1';
import Name from './components/info2';
import Position from './components/info3';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tarjeta}>
      <Image style = {{height: 100, width: 100}} source={{uri: 'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'}}></Image>
      <Year text='Date of birth: 2000' />
      <Name text='Name: Russell Arcila'/>
      <Position text='Position: Software engineer'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    justifyContent: 'center',
  },
  tarjeta: {
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'cyan',
    padding: 10,
  },
});
