import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
 
export default function SupportWorkEditModal(props) {
	const [show, setShow] = useState(false);
	const handleClose  = () => setShow(true);

	return (
       <>
 			<Modal show={props.show} onHide={handleClose} backdrop="false">
				<Modal.Header closeButton>
				<Modal.Title id="title">
				Do you want to Edit this Record ?
				</Modal.Title>

 				</Modal.Header>
				<Modal.Body> 
				<div class="user-form">
							<form>
							  <div class="form-row">
								<div class="form-group col-md-6">
								  <label for="inputname">Support Work Type</label>
								  <select class="custom-select" id="suppWorkType">
								    <option value="">Select Support Work Type</option>
									<option value="Server work">Server work</option>
									<option value="Data">Data</option>
								  </select>
								 
								</div>
								
								<div class="form-group col-md-6">
								  <label for="inputname">Support Work Name</label>
								  <input type="text" class="form-control" id="suppWorkName"></input>
								</div>
							  </div>
							  <div class="mb-2">
								<button onclick="editSupport()" class="btn btn-primary mr-3" data-target="#edit-success" data-toggle="modal" data-dismiss="modal">
                                 Edit
                                </button>
							  </div>  
							</form>
				</div>

				</Modal.Body>
 			</Modal>
    </>

          );
}
