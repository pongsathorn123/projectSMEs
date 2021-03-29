import UserLogin from './views/userLogin';
import AllProject from './views/allProject';
import UserRegister from './views/userRegister';
import CreateProject from './views/createProject';
import AuthorizeSme from './views/authorizeSme';
import Authorize from './admin/authorize';
import CreateProjectDetail from './views/createProjectDetail';
import Home from './views/home';

const routesApp = [
  {
    path: "/createProjectDetail",
    name: "createProjectDetail",
    exact: true,
    component: CreateProjectDetail
  }, 
  {
    path: "/authorizeSme",
    name: "authorizeSme",
    exact: true,
    component: AuthorizeSme
  }, 
  {
    path: "/authorize",
    name: "authorize",
    exact: true,
    component: Authorize
  },
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
