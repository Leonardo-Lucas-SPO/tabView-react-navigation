import BarraPesquisa from './components/barraPesquisa';
import GridImagem from './components/gridImagem';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';


export default function Galeria() {
  return (
      <ScrollView>
        <SafeAreaView style={style.container}>
          <BarraPesquisa />
          <GridImagem />
     
        </SafeAreaView>
      </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 25,
  },
});

