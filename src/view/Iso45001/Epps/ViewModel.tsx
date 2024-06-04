import React, {useState} from 'react';
import {epps} from '../../../types/EppsTypes';

const EppsAddViewModel = ({}) => {
  const [selectedRazon, setSelectedRazon] = useState('');
  const [actividades, setonActividades] = useState('');
  const [materiales, setMateriales] = useState('');
  const [arrayEpps, setArrayEpps] = useState<epps[]>([]);
  const [error, setError] = useState('');

  const addEpps = () => {
    let obj: epps = {
      razon: selectedRazon,
      actividad: actividades,
      materiales: materiales,
    };

    if (!validEpps()) return;
    
    setArrayEpps([...arrayEpps, obj]);

    setSelectedRazon('');
    setonActividades('');
    setMateriales('');
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
    arrayEpps,
    error,
    setError,
    // FUNCTION
    addEpps,
  };
};

export default EppsAddViewModel;
