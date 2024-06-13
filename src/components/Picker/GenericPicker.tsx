import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet} from 'react-native';

const GenericPicker = ({selectedValue, onValueChange, items}) => {
  return (
    <Picker
      style={styles.picker}
      selectedValue={selectedValue}
      onValueChange={onValueChange}>
      {items.map(option => (
        <Picker.Item
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    borderRadius: 8,
  },
});
export default GenericPicker;
