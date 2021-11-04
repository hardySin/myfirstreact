import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';

 
export default function DeleteSure(props) {
	 
	const yes=async(id)=>
	{
		console.log("hello world ", id)

		try
		{
		   const requestOptions = {
			   method: 'POST',
			   headers: { 'Content-Type': 'application/json' },
			   body: JSON.stringify({clientData:{ clientStatus:false ,clientId: id}})
			};
		   const response = await fetch('http://localhost:4000/tracking/deleteClient', requestOptions);
		   const data = await response.json();
				 if(data.error){
 					console.log("data delete::",data.error)
 				   }
 				else{
					props.close(data)
   				 }
			}
		catch(err)
		{
		   console.log("error ", err)
		 }

	}

	const no=()=>
	{
		console.log("akljdlskdjsalkdjl ")

		props.close()
  	}
    return ( 
       <>
	           	<Modal show={props.open} onHide={()=>props.close()}	 backdrop="static" keyboard={false} >
				<Modal.Header closeButton>
				<Modal.Title id="title">
				Do you want to Delete this Record ?
				</Modal.Title>
 				</Modal.Header>
				<Modal.Body> 
				<div class="user-form">
				<div class="input-group">
					<div class="delete_button">
					    <button onClick={()=>yes(props.deleteId.current)} class="btn btn-primary mr-3">Yes</button>
					    <button onClick={()=>no()} class="btn btn-primary mr-3" >No</button>
						</div>  
					</div>
				</div>
  				</Modal.Body>
 			</Modal>
  	  </>
         );
}
