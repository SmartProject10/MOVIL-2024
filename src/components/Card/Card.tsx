import React from 'react';

import {Card, Icon} from '@rneui/themed';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {MyColor} from '../../theme/AppTheme';
export default function CardComponent({title, description, materiales}) {
  return (
    <Card containerStyle={{borderRadius: 10}}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <Icon
            name="trash"
            size={25}
            type="font-awesome"
            color={MyColor.error}
          />
        </View>
      </View>
      <Card.Divider />
      <Text style={styles.description}>{description}</Text>
      <Card.Divider />
      <Text style={styles.description}>{materiales}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {flex: 1, flexDirection: 'row', justifyContent:'space-between'},
  title: {
    fontSize: RFValue(15, 500),
    fontWeight: 'bold',
    color: MyColor.black,
    justifyContent: 'center',
  },
  description: {
    marginBottom: 10,
    
    fontSize: RFValue(12, 500),
    color: MyColor.black,
  },
});
