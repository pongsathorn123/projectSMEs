import UserLogin from './userLogin';
import UserRegister from './userRegister';

const routesApp = [
  
  {
    path: "/",
    name: "login",
    exact: true,
    component: UserLogin
  },
  {
    path: "/userRegister",
    name: "userRegister",
    exact: true,
    component: UserRegister
  }
];

export default routesApp;
