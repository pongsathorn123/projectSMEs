import UserLogin from './userLogin';
import Home from './allProject';
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
    path: "/allProject",
    name: "allProject",
    exact: true,
    component: allProject
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
  },
  {
    path: "/investor",
    name: "investor",
    exact: true,
    component: investor
  }
];

export default routesApp;
