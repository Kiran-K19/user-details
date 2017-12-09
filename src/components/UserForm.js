import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './Input'

const validate=(values)=>{
    const errors={};
    if (!values.name) {
        errors.name = 'Required';
      } else if (/[0-9]/.test(values.name)) {
        errors.name = 'A name cannot include digits';
      }
    if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
    if(!values.mobile){
        errors.mobile = 'Required'
    } else if (!/[0-9]/.test(values.mobile)) {
      errors.mobile = 'Mobile number cannot include alphabets';
    } else if (values.mobile.length>10 || values.mobile.length<10) {
        errors.mobile = 'Please enter a valid mobile number';
      }
    return errors;
}

class UserForm extends React.Component{

    render(){
    const {handleSubmit,error} = this.props;

    return(
        <form onSubmit={handleSubmit}>
                <Field name="name" component={Input}  label="Name* " type="text"/>
                <Field name="email" component={Input} label="Email* " type="text"/>   
                <Field name="mobile" component={Input} label="Mobile* " type="text"/>
                  {error && <strong>{error}</strong>}
            <button type="submit">Submit</button>
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