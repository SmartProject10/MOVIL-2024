import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HomeStackParamList} from '../../navigation/HomeStackNavigation';
import styles from './Styles';
import {Picker} from '@react-native-picker/picker';
import DI from '../../../di/ioc';
import {Button} from '@rneui/themed';

interface Props
  extends StackScreenProps<HomeStackParamList, 'IndexIsoScreen'> {}
export const EppsAddScreen = ({}) => {
  const {selectedRazon, setSelectedRazon, actividades, setonActividades} =
    DI.resolve('EppsAddViewModel');
  return (
    <View style={{flex: 1}}>
      <Text style={styles.titleScreen}>Entrega de EPP's</Text>

      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.padPicker}>
            <Text style={styles.textEps}>Razón</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={selectedRazon}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedRazon(itemValue)
                }>
                <Picker.Item
                  label="Seleccione una razón"
                  value=""
                  style={styles.placeholder}
                />

                <Picker.Item label="Desgaste" value="Desgaste" />
                <Picker.Item label="Perdida" value="Perdida" />
                <Picker.Item label="Robo" value="Robo" />
                <Picker.Item label="Nueva dotación" value="Nueva dotación" />
              </Picker>
            </View>
          </View>
          <View style={styles.padPicker}>
            <Text style={styles.textEps}>Actividades de trabajo</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={actividades}
                onValueChange={(itemValue, itemIndex) =>
                  setonActividades(itemValue)
                }>
                <Picker.Item
                  label="Seleccione una actividad"
                  value=""
                  style={styles.placeholder}
                />

                <Picker.Item
                  label="Trabajo en altura"
                  value="Trabajo en altura"
                />
                <Picker.Item
                  label="Trabajo en soldadura"
                  value="Trabajo en soldadura"
                />
                <Picker.Item
                  label="Trabajo en espacio confinados"
                  value="Trabajo en espacio confinados"
                />
                <Picker.Item
                  label="Trabajo con carga electrica"
                  value="Trabajo con carga electrica"
                />
                <Picker.Item
                  label="Trabajo con materiales peligrosos"
                  value="Trabajo con materiales peligrosos"
                />
                <Picker.Item
                  label="Trabajo con sustancias peligrosos"
                  value="Trabajo con sustancias peligrosos"
                />
                <Picker.Item
                  label="Trabajo servicios generales"
                  value="Trabajo servicios generales"
                />
              </Picker>
            </View>
          </View>
          <View style={styles.padPicker}>
            <Text style={styles.textEps}>Material</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={actividades}
                onValueChange={(itemValue, itemIndex) =>
                  setonActividades(itemValue)
                }>
                <Picker.Item
                  label="Seleccione un material"
                  value=""
                  style={styles.placeholder}
                />

                <Picker.Item label="Botas" value="Botas" />
                <Picker.Item label="Casco" value="Casco" />
                <Picker.Item label="Guantes" value="Guantes" />
                <Picker.Item label="Pantalon" value="Pantalon" />
                <Picker.Item label="Camisa" value="Camisa" />
              </Picker>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.btnCan}
              onPress={() => navigationHome()}>
              <Text style={styles.textCanBtn}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnContinue}
              onPress={() => navigationHome()}>
              <Text style={styles.textBtn}>Agregar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <Text>Razon</Text>
      </View>
    </View>
  );
};
