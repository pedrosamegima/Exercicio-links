import { StatusBar } from 'expo-status-bar';
import { styles } from '../css/indexstyle';
import { Text } from 'react-native';
import { View, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.img}
      source={require('../../assets/home.png')}
      />
      <Text>Página principal</Text>
    <Link style={styles.btn} href={"/sobre"}>Sobre</Link>
    <Link style={styles.btn} href={"/contatos"}>Contatos</Link>
      <StatusBar style="auto" />
    </View>
  );
}


