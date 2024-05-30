import {KeyboardType, StyleSheet, TextInput, View, Text} from 'react-native';
import {MyColor} from '../theme/AppTheme';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
interface Props {
  placeholder: string;
  value: string;
  prop: string;
  maxLength?: number;
  disable?: boolean;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  onChangeText: (prop: string, value: any) => void;
}

export const DefaultTextInput = ({
  placeholder,
  prop,
  maxLength = 50,
  value,
  disable = true,
  keyboardType = 'default',
  secureTextEntry = false,
  onChangeText,
}: Props) => {
  return (
    <View>
      <Text>{value.length > 0 ? placeholder : ''}</Text>
      <View style={styles.container}>
        <TextInput
          editable={disable}
          placeholder={placeholder}
          style={styles.textInput}
          placeholderTextColor={MyColor.black}
          value={value}
          maxLength={maxLength}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          onChangeText={text => onChangeText(prop, text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: MyColor.black,
    fontSize: RFValue(10, 500),

    color: MyColor.black,
    flex: 1,
  },
});
