import { myProfileThunkCreator } from "./auth-reducer";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setInit": {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const setInitSucs = () => {
  return { type: "setInit" };
};

export const initThunkCreator = () => (dispatch) => {
  let promise = dispatch(myProfileThunkCreator());

  // promise.then(() => {
  //   dispatch(setInitSucs());
  // });
  Promise.all([promise]).then(() => {
    dispatch(setInitSucs());
  });
};

export default appReducer;
