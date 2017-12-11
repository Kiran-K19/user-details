import React from 'react';
import UserForm from './UserForm';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { SubmissionError } from 'redux-form'
import UserModal from './UserModal';

function mapStateToProps(state){
  return{
      initialValues:state.initialValues,
      users:state.user,
      userDetails:state.userDetails
  }
}



class Home extends React.Component {

  submit = (values) => {

    let containsError=false;

    if(this.props.users.length===0){
      this.props.submitForm(values);
      this.props.updateInitial(values);
      this.props.showDetails();
      // console.log(store.getState());
    }

    else if (this.props.users.length>0) {
      this.props.users.forEach((val,i,arr)=>{
        if(val.email === values.email){
          // console.log(val.email);
          // console.log(values.email);
          containsError=true;
          throw new SubmissionError({
            email: 'Email already Registered or not valid',
            _error: 'Oh snap! Change a few things up and try submitting again.!'
          });
        }
        if(val.mobile === values.mobile){
          // console.log(val.mobile);
          // console.log(values.mobile);
          containsError=true;
          throw new SubmissionError({
            mobile: 'Phone number already Registered',
            _error: 'Oh snap! Change a few things up and try submitting again.!'
          });
        }
      }) 
        if(!containsError) { 
          this.props.submitForm(values);
          this.props.updateInitial(values);
          this.props.showDetails();
          // console.log(store.getState());
          }
      
    }
  }

  hideDetails=()=>{
    this.props.hideDetails();
    // console.log(store.getState());
  }

  render() {
    return (
    <div>
      <UserModal show={this.props.userDetails} onHide={this.hideDetails} initialvalues={this.props.initialValues}/>
      <UserForm  disableButton={this.props.userDetails} initialValues={this.props.initialValues} onSubmit={this.submit} />
    </div>
    );
  }
}

Home = connect(mapStateToProps,{...actionCreators})(Home);

export default Home;
