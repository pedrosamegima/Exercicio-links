import { StatusBar } from 'expo-status-bar';
import { styles } from '../css/contatostyle';
import { Text } from 'react-native';
import { View, Image} from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.img}
      source={require('../../assets/perfil.png')}
      />
      <Text>Entre em contato no email: pedro.samegima@portalsesisp.org.br</Text>
    <Link style={styles.btn} href={"/"}>Inicio</Link>
    <Link style={styles.btn} href={"/sobre"}>Sobre</Link>
      <StatusBar style="auto" />
    </View>
  );
}