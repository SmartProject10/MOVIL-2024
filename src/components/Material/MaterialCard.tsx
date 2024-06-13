import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const MaterialCard = ({image, title, subtitle, content}) => {
  console.log(image, title, subtitle, content);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.text}>{content}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CBF4E7',
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    elevation: 0,
    marginBottom: 50,
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});

export default MaterialCard;
