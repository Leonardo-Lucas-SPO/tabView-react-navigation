import { Image, StyleSheet, View } from 'react-native';

export default function GridImagem() {
  return (
      <View style={style.coluna}>
        <View style={style.linha}>
          <Image source={require('../../assets/mario.png')} style={style.imagem} />
          <Image source={require('../../assets/flor.png')} style={style.imagem} />
        </View>
        <View style={style.linha}>
          <Image source={require('../../assets/oculos.png')} style={style.imagem} />
          <Image source={require('../../assets/mar.png')} style={style.imagem} />
        </View>
        <View style={style.linha}>
          <Image source={require('../../assets/barco.png')} style={style.imagem} />
          <Image source={require('../../assets/corrente.png')} style={style.imagem} />
        </View>
      </View>
  );
}

const style = StyleSheet.create({
  coluna: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginTop: 15,
    gap: 10,
  },
  linha: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  imagem: {
    width: 186,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 20,
  },
});
