import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';

 
export default function UpdateModal(props) {
     
   return (
       <>
        			<Modal show={props.show}>
				<Modal.Header closeButton>
 				</Modal.Header>
				<Modal.Body> 
                <div aria-labelledby="myModalLabel" class="modal fade show f-password" id="edit-success" role="dialog" aria-modal="true">
                <div class="modal-dialog modal-md" role="document">
                    <div  class="modal-content text-center">
                        <div  class="modal-header">
                        <div class="modal-title w-100 small-title">Record Updated Successfully !.....</div>
                        <button  aria-label="Close" class="close" data-dismiss="modal" type="button">
                        <i class="las la-times"></i></button></div>
                        <div  class="modal-body mb-0 p-0">
                    
                        </div>
                    </div>
                </div>
                </div>
        	</Modal.Body>
 			</Modal>

        
                </>
         );
}
