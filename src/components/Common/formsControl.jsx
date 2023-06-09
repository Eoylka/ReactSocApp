import s from "./formsControl.module.css";

export const TextArea = (props) => {
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div className={hasError ? s.error : ""}>
      <div>
        {hasError && <span className={s.errorText}>{props.meta.error}</span>}
      </div>
      <input
        {...props.input}
        className={props.className}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export const MessageArea = (props) => {
  const hasError = props.meta.touched && props.meta.error;
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      props.handleSubmit(); // вызов функции handleSubmit, которая отправляет сообщение
    }
  };
  return (
    <div className={hasError ? s.error : ""}>
      <textarea
        {...props.input}
        className={props.className}
        placeholder={props.placeholder}
      
      />
      <div className={s.errorMsgCont}>
        {hasError && <span className={s.errorMsg}>{props.meta.error}</span>}
      </div>
    </div>
  );
};
export const LoginArea = (props) => {
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div className={hasError ? s.error : ""}>
      <input
        {...props.input}
        className={props.className}
        placeholder={props.placeholder}
      />
      <div className={s.errorLogin}>
        {hasError && <span className={s.errorMsg}>{props.meta.error}</span>}
      </div>
    </div>
  );
};

export const PasswordArea = (props) => {
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div className={hasError ? s.error : ""}>
      <input
        {...props.input}
        className={props.className}
        placeholder={props.placeholder}
        type="password"
      />
      <div className={s.errorLogin}>
        {hasError && <span className={s.errorMsg}>{props.meta.error}</span>}
      </div>
    </div>
  );
};

export const ChecBox = (props) => {
  return (
    <div className={s.checkBox}>
      <input
        {...props.input}
        className={s.cheboxStyle}
        placeholder={props.placeholder}
        type={"checkbox"}
      />
      <div className={s.rememberMe}>Remember Me</div>
    </div>
  );
};
