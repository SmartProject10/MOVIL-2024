import {StyleSheet} from 'react-native';

const EppsStyles = StyleSheet.create({
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

export default EppsStyles;
