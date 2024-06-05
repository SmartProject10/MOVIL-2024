import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
const FichaViewModel = ({}) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleExpansion = () => {
    const initialValue = expanded ? 1 : 0;
    const finalValue = expanded ? 0 : 1;

    setExpanded(!expanded);

    animation.setValue(initialValue);
    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false, // No usar el driver nativo ya que estamos animando height
    }).start();
  };

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 400], // Ajusta el valor de la altura máxima deseada
  });

  return {
    expanded,
    toggleExpansion,
    heightInterpolation,
  };
};

export default FichaViewModel;
