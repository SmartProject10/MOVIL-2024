import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {MyColor} from '../../theme/AppTheme';
import {Button} from 'react-native-paper';

export default function CardComponent({
  imageUri,
  title,
  empresa,
  razon,
  tipoTrabajo,
  onAdd,
}) {
  return (
    <View style={styles.card}>
      <View>
        <Image source={{uri: imageUri}} style={styles.image} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => console.log('minus --')}>
            <Text style={styles.actionButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={{color: '#000'}}>1</Text>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => console.log('minus ++')}>
            <Text style={styles.actionButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>Empresa: {empresa}</Text>
        <Text style={styles.description}>Razon: {razon}</Text>
        <Text style={styles.description}>Tipo Trabajo: {tipoTrabajo}</Text>
      </View>

      {/*  <Button
        style={styles.addButton}
        icon="plus-circle"
        mode="text"
        onPress={onAdd}
        children={undefined}
      /> */}
      {
        <TouchableOpacity style={styles.addButton} onPress={onAdd}>
          <Text style={styles.addButtonText}>+ Agregar</Text>
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 1, // sombra para Android
    shadowColor: '#000', // sombra para iOS
    shadowOffset: {width: 0, height: 2}, // sombra para iOS
    shadowOpacity: 0.2, // sombra para iOS
    shadowRadius: 4, // sombra para iOS
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: MyColor.black,
  },
  description: {
    fontSize: 13,
    color: '#666',
  },
  addButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: MyColor.greendTen3,
    borderRadius: 4,
    width: 80,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  actionButton: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: MyColor.primaryFb,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
