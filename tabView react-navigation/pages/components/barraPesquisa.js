import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BarraPesquisa() {
  return (
    <View style={style.container}>
      <View style={style.pesquisa}>
        <Icon style={style.icone} name="search" size={15} color="#a8a8a8" />
        <TextInput placeholder='Pesquisar' placeholderTextColor="#a8a8a8" style={style.texto} />
      </View>
        <Icon style={style.icone} name="comment" size={20} color="#a8a8a8" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  pesquisa: {
    backgroundColor: '#edf0ee',
    paddingHorizontal: 10,
    paddingVertical: 7,
    width: 350,
    minHeight: 40,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icone: {
    marginHorizontal: 5,
  },
  texto: {
    color: '#000',
    fontSize: 17,
    width: 300
  },
});
