import React from 'react';
import UserForm from './UserForm';
import store from '../store';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { SubmissionError } from 'redux-form'

function mapStateToProps(state){
  return{
      initialValues:state.initialValues,
      users:state.user
  }
}


class Home extends React.Component {

  submit = (values) => {

    let containsError=false;

    if(this.props.users.length===0){
      this.props.submitForm(values);
      this.props.updateInitial(values);
      console.log(store.getState());
    }

    else if (this.props.users.length>0) {
      this.props.users.forEach((val,i,arr)=>{
        if(val.email === values.email){
          console.log(val.email);
          console.log(values.email);
          containsError=true;
          throw new SubmissionError({
            email: 'Email already Registered',
            _error: 'Registration Failed!'
          });
        }
        if(val.mobile === values.mobile){
          console.log(val.mobile);
          console.log(values.mobile);
          containsError=true;
          throw new SubmissionError({
            mobile: 'Phone number already Registered',
            _error: 'Registration Failed!'
          });
        }
      }) 
        if(!containsError) { 
          this.props.submitForm(values);
          this.props.updateInitial(values);
          console.log(store.getState());
          }
      
    }
  }

  render() {
    return <UserForm initialValues={this.props.initialValues} onSubmit={this.submit} />
  }
}

Home = connect(mapStateToProps,{...actionCreators})(Home);

export default Home;
