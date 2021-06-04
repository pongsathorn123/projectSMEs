import UserLogin from './views/userLogin';
import AllProject from './views/allProject';
import UserRegister from './views/userRegister';
import CreateProject from './views/createProject';
import AuthorizeSme from './views/authorizeSme';
import Authorize from './admin/authorize';
import ReportDetail from './admin/reportDetail';
import UpdateSmes from './admin/updateSmes';
import ShowSmesDetail from './views/showSmesDetail';
import CreateProjectDetail from './views/createProjectDetail';
import Home from './views/home';
import Home2 from './views/home2';
import AuthorizeInves from './views/authorizeInves';
import AuthorizeInvesAdmin from './admin/authorizeInves';
import AuthorizeUserAdmin from './admin/authorizeUser';
import AuthorizeReportAdmin from './admin/authorizeReport';
import AuthorizeReport from './views/authorizeReport';
import AuthorizeUser from './views/authorizeUser';
import InvesChart from './views/invesChart';
import EditAccount from './user/editAccount';
import EditSmes from './user/editSmes';
import AddInves from './user/addInves';
import MyProject from './user/myProject';
import Report from './user/report';
import MyProjectDetail from './user/myProjectDetail';

const routesApp = [

  {
    path: "/reportdetail",
    name: "ReportDetail",
    exact: true,
    component: ReportDetail
  },
  {
    path: "/report",
    name: "Report",
    exact: true,
    component: Report
  },
  {
    path: "/inveschart",
    name: "InvesChart",
    exact: true,
    component: InvesChart
  },
  {
    path: "/authorizeInvesAdmin",
    name: "AuthorizeInvesAdmin",
    exact: true,
    component: AuthorizeInvesAdmin
  }, 
  {
    path: "/authorizeReport",
    name: "AuthorizeReport",
    exact: true,
    component: AuthorizeReport
  }, 
  {
    path: "/authorizeUserAdmin",
    name: "AuthorizeUserAdmin",
    exact: true,
    component: AuthorizeUserAdmin
  }, 
  {
    path: "/authorizeReportAdmin",
    name: "AuthorizeReportAdmin",
    exact: true,
    component: AuthorizeReportAdmin
  }, 
  {
    path: "/authorizeUser",
    name: "AuthorizeUser",
    exact: true,
    component: AuthorizeUser
  }, 
  {
    path: "/authorizeInves",
    name: "AuthorizeInves",
    exact: true,
    component: AuthorizeInves
  }, 
  {
    path: "/addInves",
    name: "AddInves",
    exact: true,
    component: AddInves
  }, 
  {
    path: "/updateSmes",
    name: "updateSmes",
    exact: true,
    component: UpdateSmes
  }, 
  {
    path: "/myProjectDetail",
    name: "myProjectDetail",
    exact: true,
    component: MyProjectDetail
  }, 
  {
    path: "/myProject",
    name: "myProject",
    exact: true,
    component: MyProject
  }, 
  {
    path: "/editSmes",
    name: "editSmes",
    exact: true,
    component: EditSmes
  }, 
  {
    path: "/editAccount",
    name: "editAccount",
    exact: true,
    component: EditAccount
  }, 
  {
    path: "/home2",
    name: "home2",
    exact: true,
    component: Home2
  }, 
  {
    path: "/showSmesDetail",
    name: "showSmesDetail",
    exact: true,
    component: ShowSmesDetail
  }, 
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
