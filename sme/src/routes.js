import UserLogin from './userLogin';
import UserRegister from './userRegister';
import createProject from './createProject';

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
  },
  {
    path: "/createProject",
    name: "createProject",
    exact: true,
    component: createProject
  }
];

export default routesApp;
