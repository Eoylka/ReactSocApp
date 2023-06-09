import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthComponent = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth === false) return <Navigate to={"/login"} />;
      return <Component {...this.props} />;
    }
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};

export const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
};

export const withRouter1 = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
      if (!props.isAuth) {
        navigate("/login");
      }
    }, [props.isAuth]);

    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
};

// const useField = (placeholder) => {
//   const [isValid, setValid] = useState(false)
//   const [email, setEmail] = useState('')

//   useEffect(() => {
//     // логика отвечающая за проверку эмейла на правильность ввода
//     setValid(false)
//   }, [email])

//   return {value: email, onChangeText: setEmail, isValid, placeholder}
// }

// const login = useField('Login')

// <input placeholder={login.placeholder} {...login} />