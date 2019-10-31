import React from "react";
import PropTypes from "prop-types";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../commons/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newMessageBody"}
          placeholder={"Enter your message"}
          validate={[required, maxLength10]}

        />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm);

const Dialogs = props => {
  const { dialogsPage } = props;
  const { dialogs, messages } = dialogsPage;

  const addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
    console.log('add new mess fn', );
  };

  if (!props.isAuth) return <Redirect to="/login" />;

  return (
    <div className={s.dialogsBlock}>
      <div className={s.dialogsItems}>
        {dialogs.map(item => (
          <DialogItem key={item.id} name={item.name} id={item.id} />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map(item => (
          <Message message={item.message} key={item.id} />
        ))}
        <div className="addMessage">
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

Dialogs.propTypes = {
  dialogsPage: PropTypes.object
};

export default Dialogs;
