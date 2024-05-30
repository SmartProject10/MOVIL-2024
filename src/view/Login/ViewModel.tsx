import React, {useState} from 'react';

const LoginViewModel = ({}) => {
  const [sms, setSms] = useState('hola');
  const [nav, setNav] = useState(false);

  const [objectLogin, setObjectLogin] = useState({
    email: '',
    password: '',
  });

  const onChangeLogin = (prop: string, value: any) => {
    setObjectLogin({...objectLogin, [prop]: value});
  };

  const navigationHome = () => {
    setNav(true);
  };

  return {
    ...objectLogin,
    onChangeLogin,
    navigationHome,
    sms,
    nav
  };
};

export default LoginViewModel;
