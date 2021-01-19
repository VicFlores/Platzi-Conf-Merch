import { useEffect, useState } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = 'API para convertir direcciones';

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.lugarDondeSeExtraeráLaDirecciónDeLaRespuesta);
  }, []);

  return map;
};

export default useGoogleAddress;
