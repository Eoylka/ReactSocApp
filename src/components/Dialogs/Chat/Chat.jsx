import { Field, reduxForm } from "redux-form";
import s from "./Chat.module.css";
import React from "react";
import { MessageArea } from "../../Common/formsControl";
import { requiredTextMsg } from "../../../utils/validators/validators";
import sendMsg from "../../../img/add/SendMsg.svg";
import { useEffect, useRef } from "react";

const Chat = ({ addMsgActionCreator, message, clearMsg }) => {
  const messageEl = useRef(null);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  let mapChat = message.MsgData.map((el) => (
    <div
      key={el.key}
      className={el.position === "1" ? s.chat_window1 : s.chat_window2}
    >
      <div key={el.key} className={s.msg}>
        {el.msg}
      </div>
    </div>
  ));

  let addNewMsg = (values) => {
    addMsgActionCreator(values.newMesageBody);

    clearMsg();
  };

  return (
    <div>
      <div className={s.chat} ref={messageEl}>
        {mapChat}
      </div>
      <AddMessageFormRedux onSubmit={addNewMsg} />
    </div>
  );
};

const AddMesageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <Field
        className={s.input}
        component={MessageArea}
        name="newMesageBody"
        placeholder="Enter your message"
        validate={[requiredTextMsg]}
      />

      <button className={s.sendMsg}>
        <img src={sendMsg} alt="" />
      </button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddMesageForm);

export default Chat;
