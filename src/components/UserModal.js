import React from 'react';
import {Modal,Button} from 'react-bootstrap';

const UserModal=(props)=>{
  return (
    <Modal {...props}>
      <Modal.Header>
        <Modal.Title >Hey {props.initialValues.name}! Your details have been successfully captured</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="input-row">
      <label>Name: </label>
       <span className="">{props.initialValues.name}</span>
      </div>
      <div className="input-row">
      <label>Email: </label>
       <span className="">{props.initialValues.email}</span>
      </div>
      <div className="input-row">
      <label>Mobile: </label>
       <span className="">{props.initialValues.mobile}</span>
      </div>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

  export default UserModal;