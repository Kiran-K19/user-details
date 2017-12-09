import React from 'react';


class Input extends React.Component{

  componentDidUpdate(prevProps) {
    if (prevProps.meta.error !=this.props.meta.error ) {
        this.input.focus();
    }
}

  handleKeyPress=(value)=>{
    console.log(value);
  }

    render(){
const {type, label, input, meta:{touched,error,dirty,active,visited}} = this.props
return(
    <div>
    <label>{label}</label>
      <input {...input} type={type}  ref={input => (this.input = input)}/>
      {error &&
       <div className="alert alert-warning" role="alert">{error}</div>}
    </div>
  );
}
}
export default Input;