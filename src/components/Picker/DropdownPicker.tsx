import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Text} from 'react-native-paper';
import {MyColor} from '../../theme/AppTheme';

interface DropdownItem {
  label: string;
  value: string;
}

interface GenericDropdownProps {
  selectedValue;
  data: DropdownItem[];
  placeholder?: string;
  onSelect: (value: string) => void;
}

const GenericDropdown: React.FC<GenericDropdownProps> = ({
  selectedValue,
  data = [],
  placeholder = 'Select an option',
  onSelect,
}) => {
  const [isFocus, setIsFocus] = React.useState(false);

  const handleSelect = (item: DropdownItem) => {
    //setValue(item.value);
    onSelect(item.value);
    setIsFocus(false);
  };

  const renderLabel = () => {
    if (selectedValue || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: MyColor.primaryBlue}]}>
          {placeholder}
        </Text>
      );
    }
    return null;
  };
  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={styles.dropdown}
        placeholder={!isFocus ? placeholder : ' '}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemContainerStyle={styles.itemContainerStyle}
        itemTextStyle={styles.itemTextStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Buscar..."
        value={selectedValue}
        onChange={handleSelect}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 6,
    top: 0,
    zIndex: 999,
    paddingHorizontal: 5,
    fontSize: 12,
  },
  container: {
    padding: 0,
    marginBottom: 12,
  },
  dropdown: {
    height: 50,
    backgroundColor: MyColor.white,
    borderBottomWidth: 1,
    borderBottomColor: MyColor.gray,
    borderRadius: 4,
    padding: 12,
    shadowColor: MyColor.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 0,
  },
  placeholderStyle: {
    fontSize: 15,
    color: MyColor.black,
    opacity: 0.8,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: MyColor.black,
    marginTop: 5,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: MyColor.black,
  },
  item: {
    padding: 10,
  },
  itemContainerStyle: {
    color: MyColor.black,
    backgroundColor: MyColor.white,
  },
  containerStyle: {
    backgroundColor: MyColor.black,
  },
  itemTextStyle: {
    fontSize: 16,
    color: MyColor.black,
  },
});

export default GenericDropdown;
