import { StatusBar } from 'expo-status-bar';
import { styles } from '../css/sobrestyle';
import { Text } from 'react-native';
import { View,Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
          <Image style={styles.img}
      source={require('../../assets/email.png')}
      />
      <Text>Sobre a pagina</Text>
      <Link style={styles.btn} href={"/"}>Inicio</Link>
     <Link style={styles.btn} href={"/contatos"}>Contatos</Link>
      <StatusBar style="auto" />
    </View>
  );
}
 