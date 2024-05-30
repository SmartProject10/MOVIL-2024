import React, {useState} from 'react';

const EppsAddViewModel = ({}) => {
  const [selectedRazon, setSelectedRazon] = useState('');
  const [actividades, setonActividades] = useState('');

  return {
    selectedRazon,
    setSelectedRazon,
    actividades,
    setonActividades,
  };
};

export default EppsAddViewModel;
