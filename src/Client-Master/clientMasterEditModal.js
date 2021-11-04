import React,{useEffect, useRef, useState, useMemo} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Row ,Col} from 'react-bootstrap';
import axios from 'axios';

 
export default function ClientMasterEditModal(props) {
	 
	const [client ,setClient]= useState({})

	const [loading ,setLoading]= useState(false)

	const clientData= useRef(new Array())
	const responseData= useRef()

	// this constant for the error
	const [errorName ,seterrorName]= useState();
	const [errornode ,seterrornode]= useState();
	const [errornodalCustodian ,seterrornodalCustodian] =useState();

	const [errorcustomerCustodian ,seterrorcustomerCustodian]=useState();
	const [errordeliveryAnchor ,seterrordeliveryAnchor]=useState();
	const [errorprojectManager ,seterrorprojectManager]=useState();
 
	const name=useRef()
	const node=useRef()
	const nodalCustodian=useRef()

	const customerCustodian=useRef()
	const deliveryAnchor=useRef()
	const projectManager=useRef()

	
	const changeHandler = e => {
		setClient({...client, [e.target.name]: e.target.value})
	}
 
	const update=async()=>	
	{
 		 
  		 try
		 {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({clientData:{ client:client ,clientId: props.clientId.current}})
			};
			const response = await fetch('http://localhost:4000/tracking/editClient', requestOptions);
			const data = await response.json();
				  if(data.error)
				  {
					seterrorName(data.error.clientName)
					seterrorcustomerCustodian(data.error.customerCustodian)
					seterrordeliveryAnchor(data.error.deliveryAnchor)

					seterrornodalCustodian(data.error.nodalCustodian)
					seterrornode(data.error.node)
					seterrorprojectManager(data.error.projectManager)
 				 }
				 else{
					seterrorName()
					seterrorcustomerCustodian()
					seterrordeliveryAnchor()

					seterrornodalCustodian()
					seterrornode()
					seterrorprojectManager()

					clientData.current=[];
					for (let obj of data) {
						clientData.current.push(obj);
					   }
					    console.log("client daata" , clientData)
    				  	}
			 }
		 catch(err)
		 {
			console.log("error ", err)
		  }
 		  props.closeEdit(clientData)
	}
	
 	const getData= async()=>
	{
		try
		{
			setLoading(false)
		   const requestOptions = {
			   method: 'POST',
			   headers: { 'Content-Type': 'application/json' },
			   body: JSON.stringify({ clientId: props.clientId.current })
		   };
		   const response = await fetch('http://localhost:4000/tracking/getByClientID', requestOptions);
		   const data = await response.json();
				 if(data.error)
				 {
				}
				else{
					console.log("data data ",data)

					let client={"clientName":data.clientName,"node":data.node,"nodalCustodian":data.nodalCustodian,
					"customerCustodian":data.customerCustodian,"deliveryAnchor":data.deliveryAnchor,
					"projectManager":data.projectManager}	

					setClient({...client,client})
					responseData.current=data
					name.current.value=data.clientName;
					node.current.value=data.node;
					nodalCustodian.current.value=data.nodalCustodian;
					customerCustodian.current.value=data.customerCustodian;
					deliveryAnchor.current.value=data.deliveryAnchor;
					projectManager.current.value=data.projectManager;
 				 }
			}
		catch(err)
		{
 		 }
	}
 
	useMemo(()=>
	{	
		console.log("render the usememo ")
 		return	 getData()
 	},[props.clientId.current])
 
	 
     return (
       <>

		<Modal show={props.showEdit} onHide={()=>props.closeEdit()}    backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
         </Modal.Header>
        <Modal.Body>
       
	  		<div class="content-wrapper white-bg">
					 	<div class="user-form">
							<form  >
							  <div class="form-row">
								<div class="form-group col-md-4">
								  <label for="inputname">Client Name</label>
								  <input  ref={name} type="text" class="form-control" name="clientName" onChange={changeHandler}  
								     required></input>
								  <div className="error" >{errorName}</div>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Node</label>
								  <input  ref={node} type="text" class="form-control" name="node" onChange={changeHandler} 
								    required></input>
								  <div className="error">{errornode}</div>

								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Nodal Custodian</label>
								  <input ref={nodalCustodian}  type="text" class="form-control" name="nodalCustodian" onChange={changeHandler} 
								    required></input>
								  <div className="error">{errornodalCustodian} </div>
								</div>

								<div class="form-group col-md-4">
								  <label for="inputname">Customer Custodian</label>		 
								  <input ref={customerCustodian}  type="text" class="form-control" name="customerCustodian" 
								   
								  onChange={changeHandler}  required></input>
								  <div className="error">{errorcustomerCustodian} </div>
 								</div>

								<div class="form-group col-md-4">
								  <label for="inputname">Delivery Anchor</label>
								  <input ref={deliveryAnchor}  type="text" class="form-control" name="deliveryAnchor" 
								   
								  onChange={changeHandler}  required></input>
								  <div className="error">{errordeliveryAnchor}</div>

 								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Project Manager</label>
								   <input  ref={projectManager} type="text" class="form-control" name="projectManager" 
								    
								   	onChange={changeHandler}  required></input>
								   <div className="error">{errorprojectManager} </div>

  								</div>
							  </div>
							  <div class="mb-2">
								<button type="button" onClick={update} class="btn btn-primary mr-3" >Submit</button>
							  </div>  
							</form>
						  </div>
    					</div>
 		</Modal.Body>
		
      </Modal>
           
          </>
         );
}


 