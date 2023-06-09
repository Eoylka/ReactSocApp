import style from "./App.module.css";
import Nav from "./components/NavBar/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes, HashRouter } from "react-router-dom";
import UsersContainer from "./components/FindFrineds/FindFrinds-container";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { Component } from "react";
import { connect } from "react-redux";
import { initThunkCreator } from "./redux/app-reducer";
import { PreLoaderMain } from "./components/Common/preLoadre";
import { withRouter } from "./hoc/AuthRedirect";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { SettingContainer } from "./components/Settings/Settings";
import { useEffect } from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";

// class App extends Component {
//   componentDidMount() {
//     this.props.initThunkCreator();
//   }

//   render() {
//     if (!this.props.initialized) {
//       return <PreLoaderMain />;
//     }

//     return (
//       <div className="app-wraper">
//         <HeaderContainer />
//         <Nav />
//         <div className="app-wraper-content">
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/dialogs" element={<Dialogs />} />
//             <Route path="/profile/:userId?" element={<ProfileConteiner />} />
//             <Route path="/friends" element={<UsersContainer />} />
//             <Route path="/settings" element={<SettingContainer />} />
//           </Routes>
//         </div>
//       </div>
//     );
//   }
// }

const App = (props) => {
  useEffect(() => {
    props.initThunkCreator();
  }, []);

  if (!props.initialized) {
    return <PreLoaderMain />;
  }

  return (
    <div className={style.app_wraper}>
      <HeaderContainer />
      <Nav />
      <div className={style.app_wrapper_content}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/friends" element={<UsersContainer />} />
          <Route path="/settings" element={<SettingContainer />} />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppWithRouter = connect(mapStateToProps, {
  initThunkCreator,
})(withRouter(App));

export const SocialApp = () => {
  return (
    <HashRouter basemname={`/${process.env.PUBLIC_URL}`}>
      <Provider store={store}>
        <AppWithRouter />
      </Provider>
    </HashRouter>
  );
};
