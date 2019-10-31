import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Input} from "../commons/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}
                       validate={[required, maxLength10]}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = props => {
    const onSubmit = (formData) => {
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;
