import * as React from 'react';
import DI from '../../../di/ioc';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Appbar,
  Button,
  Card,
  DefaultTheme,
  Divider,
  PaperProvider,
  Text,
  TextInput,
} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {MyColor, m3Theme} from '../../../theme/AppTheme';
import CardComponent from '../../../components/Card/Card';
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import GenericPicker from '../../../components/Picker/GenericPicker';
import DropdownComponent from '../../../components/Picker/DropdownPicker';
import MaterialCard from '../../../components/Material/MaterialCard';

export const EppsAddScreen = ({navigation}) => {
  const {
    // VARIABLES
    selectedRazon,
    setSelectedRazon,
    actividades,
    setonActividades,
    materiales,
    setMateriales,
    sede,
    setSede,
    solicitante,
    setSolicitante,
    area,
    setArea,
    arrayEpps,
    error,
    setError,
    // FUNCTIONS
    addEpps,
    navigationHome,
  } = DI.resolve('EppsAddViewModel');

  const renderItem = item => (
    <View>
      {/* <MaterialCard
        image={'https://via.placeholder.com/100x80'}
        title={item.razon}
        subtitle={item.actividad}
        content={item.materiales}
      /> */}
    </View>
  );
  React.useEffect(() => {
    if (error !== '') {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: error,
        autoClose: 1300,
      });
      setError('');
    }
  }, [error]);

  React.useEffect(() => {
    console.log(arrayEpps);
  }, [arrayEpps]);
  // Array's de opciones
  const razonOptions = [
    {label: 'Seleccione una razón', value: ''},
    {label: 'Desgaste', value: 'Desgaste'},
    {label: 'Perdida', value: 'Perdida'},
    {label: 'Robo', value: 'Robo'},
    {label: 'Nueva dotación', value: 'Nueva dotación'},
  ];
  const actividadOptions = [
    {label: 'Seleccione una actividad', value: ''},
    {label: 'Trabajo en altura', value: 'Trabajo en altura'},
    {label: 'Trabajo en soldadura', value: 'Trabajo en soldadura'},
    {
      label: 'Trabajo en espacio confinados',
      value: 'Trabajo en espacio confinados',
    },
    {
      label: 'Trabajo con carga electrica',
      value: 'Trabajo con carga electrica',
    },
    {
      label: 'Trabajo con materiales peligrosos',
      value: 'Trabajo con materiales peligrosos',
    },
    {
      label: 'Trabajo con sustancias peligrosos',
      value: 'Trabajo con sustancias peligrosos',
    },
    {
      label: 'Trabajo servicios generales',
      value: 'Trabajo servicios generales',
    },
  ];
  const materialOptions = [
    {label: 'Seleccione un material', value: ''},
    {label: 'Botas', value: 'Botas'},
    {label: 'Casco', value: 'Casco'},
    {label: 'Guantes', value: 'Guantes'},
    {label: 'Pantalon', value: 'Pantalon'},
    {label: 'Camisa', value: 'Camisa'},
  ];

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Entrega de EPP's" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <AlertNotificationRoot theme="dark">
          <View style={styles.container}>
            <Card style={styles.cardContent}>
              <Card.Content>
                {/* <DropdownComponent /> */}
                <View style={styles.row}>
                  <TextInput
                    label="Sede"
                    value={sede}
                    onChangeText={text => setSede(text)}
                    style={styles.input}
                  />
                  <TextInput
                    label="Solicitante"
                    value={solicitante}
                    onChangeText={text => setSolicitante(text)}
                    style={styles.input}
                  />
                </View>
                <View style={styles.row}>
                  <TextInput
                    label="Area"
                    value={area}
                    onChangeText={text => setArea(text)}
                    style={styles.input}
                  />
                </View>
                <View style={[styles.input, styles.pickerContainer]}>
                  <GenericPicker
                    selectedValue={selectedRazon}
                    onValueChange={itemValue => setSelectedRazon(itemValue)}
                    items={razonOptions}
                  />
                </View>
                <View style={styles.row}>
                  <View style={[styles.input, styles.pickerContainer]}>
                    <GenericPicker
                      selectedValue={actividades}
                      onValueChange={itemValue => setonActividades(itemValue)}
                      items={actividadOptions}
                    />
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={[styles.input, styles.pickerContainer]}>
                    <GenericPicker
                      selectedValue={materiales}
                      onValueChange={itemValue => setMateriales(itemValue)}
                      items={materialOptions}
                    />
                  </View>
                </View>
                <Divider />
                <View style={{alignItems: 'flex-end', display: 'flex'}}>
                  <Button
                    style={{
                      borderRadius: 4,
                      width: 100,
                      marginTop: 16,
                    }}
                    icon="plus-circle"
                    mode="contained"
                    onPress={() => addEpps()}>
                    Agregar
                  </Button>
                </View>
                <View style={{alignItems: 'flex-start', display: 'flex'}}>
                  <Text
                    style={{
                      color: MyColor.black,
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginTop: 8,
                    }}>
                    Últimos materiales entregados ( {arrayEpps.length} )
                  </Text>
                  {arrayEpps.map((chunk, index) => (
                    <View key={index}>{renderItem(chunk)}</View>
                  ))}
                </View>
              </Card.Content>
            </Card>
          </View>
        </AlertNotificationRoot>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  card: {},
  cardContent: {
    borderRadius: 0,
    elevation: 0,
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8, // Añade espacio entre las filas
  },
  inputContainer: {
    marginBottom: 16, // Espacio entre cada input
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4, // Espacio entre el label y el input
  },
  input: {
    flex: 1,
    marginRight: 3,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  pickerContainer: {
    borderWidth: 0,
    borderColor: 'light',
    borderRadius: 4,
    marginTop: 6,
  },
  picker: {
    height: 56, // Ajusta la altura del picker para que coincida con la de los TextInput
    backgroundColor: 'transparent',
    color: 'black',
    display: 'flex',
  },
  mt_6: {
    marginTop: 6,
  },
});
