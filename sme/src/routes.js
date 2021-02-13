import UserLogin from './views/userLogin';
import AllProject from './views/allProject';
import UserRegister from './views/userRegister';
import CreateProject from './views/createProject';
import Home from './views/home';

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
    component: AllProject
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
    component: CreateProject
  },
  {
    path: "/home",
    name: "home",
    exact: true,
    component: Home
  },
  


];

export default routesApp;
