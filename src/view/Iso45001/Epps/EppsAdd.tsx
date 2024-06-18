import * as React from 'react';
import DI from '../../../di/ioc';
import {View, ScrollView, StatusBar, Alert} from 'react-native';
import {
  Appbar,
  Button,
  Card,
  Divider,
  Text,
  TextInput,
} from 'react-native-paper';
import {MyColor} from '../../../theme/AppTheme';
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import DropdownComponent from '../../../components/Picker/DropdownPicker';
import MaterialCard from '../../../components/Material/MaterialCard';
import styles from './Styles';
import CardComponent from '../../../components/Card/Card';
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
  } = DI.resolve('EppsAddViewModel');
  const handleAdd = () => {
    Alert.alert(
      'Botón de agregar presionado para la tarjeta',
    );
    // Aquí puedes realizar cualquier acción que necesites con los datos recibidos
  };
  const renderItem = item => (
    <View>
      <CardComponent
        imageUri={'https://picsum.photos/700'}
        title={item.materiales}
        empresa={item.area}
        razon={item.razon}
        tipoTrabajo={item.actividad}
        onAdd={handleAdd}></CardComponent>
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
    {label: 'Desgaste', value: 'Desgaste'},
    {label: 'Perdida', value: 'Perdida'},
    {label: 'Robo', value: 'Robo'},
    {label: 'Nueva dotación', value: 'Nueva dotación'},
  ];
  const actividadOptions = [
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
    {label: 'Botas', value: 'Botas'},
    {label: 'Casco', value: 'Casco'},
    {label: 'Guantes', value: 'Guantes'},
    {label: 'Pantalon', value: 'Pantalon'},
    {label: 'Camisa', value: 'Camisa'},
  ];

  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Appbar.Header mode="center-aligned">
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Entrega de EPP's" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <AlertNotificationRoot theme="dark">
          <View style={styles.container}>
            <Card style={styles.cardContent}>
              <Card.Content>
                <View style={styles.row}>
                  <TextInput
                    disabled={true}
                    label="Sede"
                    value={sede}
                    onChangeText={text => setSede(text)}
                    style={styles.input}
                  />
                  <TextInput
                    disabled={true}
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
                <View>
                  <DropdownComponent
                    selectedValue={selectedRazon}
                    data={razonOptions}
                    placeholder={'Razón'}
                    onSelect={itemValue => setSelectedRazon(itemValue)}
                  />
                </View>
                <View>
                  <DropdownComponent
                    selectedValue={actividades}
                    data={actividadOptions}
                    placeholder={'Actividades'}
                    onSelect={itemValue => setonActividades(itemValue)}
                  />
                </View>
                <View>
                  <DropdownComponent
                    selectedValue={materiales}
                    data={materialOptions}
                    placeholder={'Materiales'}
                    onSelect={itemValue => setMateriales(itemValue)}
                  />
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
                </View>
                <View>
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
