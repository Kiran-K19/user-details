import React from 'react';

class Input extends React.Component{

  componentDidUpdate(prevProps) {
    if (prevProps.meta.error !==this.props.meta.error ) {
        this.input.focus();
    }
}

    render(){
const {type, label, input, meta:{error}} = this.props
return(
    <div>
    <label>{label}</label>
   <div  className={error?"form-group has-error":"form-group has-success"}> <input className="form-control" {...input} type={type}  ref={input => (this.input = input)}/></div>
      {error &&
       <div className="alert alert-warning">{error}</div>}
    </div>
  );
}
}
export default Input;