import React from "react";
import { Field, reduxForm } from "redux-form";
import { LoginArea, ChecBox, PasswordArea } from "../Common/formsControl";
import styles from "./Login.module.css";
import { emailValid, requiredField } from "../../utils/validators/validators";

const SubmitValidationForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        className={styles.textField}
        name="username"
        component={LoginArea}
        placeholder="Login"
        validate={[requiredField, emailValid]}
      />
      <Field
        className={styles.textField}
        name="password"
        component={PasswordArea}
        placeholder="Password"
        validate={requiredField}
        type="password"
      />
      <Field name="checkbox" type={"checkbox"} component={ChecBox} />
      {error && <div>{error}</div>}

      <div>
        <button className={styles.btn} type="submit">
          Log In
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login", // a unique identifier for this form
})(SubmitValidationForm);
