import React from 'react';


class Input extends React.Component{

  handleKeyPress=(value)=>{
    console.log(value);
  }

    render(){
const {type, label, input, meta:{touched,error,dirty,active,visited}} = this.props
return(
    <div className="input-row">
    <label>{label}</label>
      <input {...input} type={type} required/>
      {error &&
       <span className="error">{error}</span>}
    </div>
  );
}
}
export default Input;