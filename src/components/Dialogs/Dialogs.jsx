import s from "./Dialogs.module.css";
import ChatContainer from "./Chat/Chat-Container";
import DialogsUserContainer from "./Chat/DialogsUser";


const Dialogs = () => {
  return (
    <div className={s.content}>
      <DialogsUserContainer />
      <ChatContainer />
    </div>
  );
};

export default Dialogs;
