import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './Input'

const validate=(values)=>{
    const errors={};
    if (!values.name) {
        errors.name = 'Required!';
      } else if (/[^A-Za-z ]/.test(values.name)) {
        errors.name = 'Name cannot include digits or special characters';
      }
    if (!values.email) {
        errors.email = 'Required!'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
    if(!values.mobile){
        errors.mobile = 'Required!'
    } else if (/[^0-9]/.test(values.mobile)) {
      errors.mobile = 'Mobile number cannot include alphabets or special characters';
    } else if (values.mobile.length>10 || values.mobile.length<10) {
        errors.mobile = 'Please enter a valid mobile number';
      }
    return errors;
}

class UserForm extends React.Component{

    
    render(){
    const {handleSubmit,error,disableButton,invalid} = this.props;

    return(
        <form onSubmit={handleSubmit}>
                <Field name="name" component={Input}  label="Name* " type="text"/>
                <Field name="email" component={Input} label="Email* " type="text"/>   
                <Field name="mobile" component={Input} label="Mobile* " type="text"/>
            <br/>
            <button className="btn btn-primary" type="submit" disabled={disableButton || invalid }>Submit</button>
            <br/><br/>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
        </form>
    );

}
}


const UserFormFunc = reduxForm({
    form: 'user',
    enableReinitialize:true,
    validate
});

UserForm = UserFormFunc(UserForm);

export default UserForm;