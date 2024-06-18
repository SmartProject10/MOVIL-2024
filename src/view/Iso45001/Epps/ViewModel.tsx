import React, {useState} from 'react';
import {epps} from '../../../types/EppsTypes';
import {useNavigation} from '@react-navigation/native';

const EppsAddViewModel = ({}) => {
  const [selectedRazon, setSelectedRazon] = useState('');
  const [actividades, setonActividades] = useState('');
  const [materiales, setMateriales] = useState('');
  const [sede, setSede] = useState('Sede Demo');
  const [solicitante, setSolicitante] = useState('Sol. Demo');
  const [area, setArea] = useState('');
  const [arrayEpps, setArrayEpps] = useState<epps[]>([]);
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const navigationHome = () => {
    navigation.navigate('HomeScreen');
  };

  const addEpps = () => {
    let obj: epps = {
      razon: selectedRazon,
      actividad: actividades,
      materiales: materiales,
      sede: sede,
      solicitante: solicitante,
      area: area,
    };

    if (!validEpps()) return;

    setArrayEpps([...arrayEpps, obj]);

    setSelectedRazon('');
    setonActividades('');
    setMateriales('');
    setArea('');
  };

  const validEpps = (): boolean => {
    if (selectedRazon === '') {
      setError('El campo razón no puede estar vacio');
      return false;
    }

    if (actividades === '') {
      setError('El campo actividades de trabjo no puede estar vacio');
      return false;
    }

    if (materiales === '') {
      setError('El campo material no puede estar vacio');
      return false;
    }
    if (area === '') {
      setError('El campo area no puede estar vacio');
      return false;
    }
    return true;
  };

  return {
    //VARIABLES
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
    // FUNCTION
    addEpps,
    navigationHome,
  };
};

export default EppsAddViewModel;
