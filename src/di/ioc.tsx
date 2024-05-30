import {asFunction, createContainer} from 'awilix';
import LoginViewModel from '../view/Login/ViewModel';
import EppsAddViewModel from '../view/Iso45001/Epps/ViewModel';

const container = createContainer();

container.register({
  //LOGIN
  LoginViewModel: asFunction(LoginViewModel),
  // EPPS
  EppsAddViewModel: asFunction(EppsAddViewModel)
});

export default container;
