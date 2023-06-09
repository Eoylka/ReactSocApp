import { reset } from "redux-form";

let initialState = {
  MsgData: [
    {
      key: "1",
      position: "1",
      name: "Viktor Popov",
      msg: "Hey man, how's it going? Haven't talked to you in a while.",
    },
    {
      key: "2",
      position: "2",
      name: "Dima Popov",
      msg: "Hey, it's good to hear from you! Things are going well, just staying busy with work and life in general. How about you?",
    },
    {
      key: "3",
      position: "1",
      name: "Vika Ivanova",
      msg: "Same here, just trying to stay on top of things. Hey, I was thinking about getting together for a beer sometime this week, what do you say? ",
    },
  ],
};

const mesagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addMsg": {
      let newMsg = {
        key: state.MsgData.length + 1,
        msg: action.newMesagesBody,
        position: "1",
        name: "Kiril Chernov",
      };
      return {
        ...state,
        MsgData: [...state.MsgData, newMsg],
      };
    }

    default:
      return state;
  }
};

export const addMsgActionCreator = (newMesagesBody) => {
  return {
    type: "addMsg",
    newMesagesBody,
  };
};

export const clearMsg = () => (dispatch) => {
  dispatch(reset("dialogAddMessageForm"));
};

export default mesagesReducer;
