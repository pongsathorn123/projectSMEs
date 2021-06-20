import UserLogin from './views/userLogin';
import AllProject from './views/allProject';
import AllProject1 from './views/allProject1';
import AllProject2 from './views/allProject2';
import AllProject3 from './views/allProject3';
import AllProject4 from './views/allProject4';
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
import InvesmentChart from './views/invesmentChart';
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
    path: "/invesmentchart",
    name: "InvesmentChart",
    exact: true,
    component: InvesmentChart
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
    path: "/allProject1",
    name: "allProject1",
    exact: true,
    component: AllProject1
  },
  {
    path: "/allProject2",
    name: "allProject2",
    exact: true,
    component: AllProject2
  },
  {
    path: "/allProject3",
    name: "allProject3",
    exact: true,
    component: AllProject3
  },{
    path: "/allProject4",
    name: "allProject4",
    exact: true,
    component: AllProject4
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
