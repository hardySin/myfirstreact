import React,{useState,useEffect, useRef} from 'react';
import Footer from '../footer';
import ClientMasterReport from './clientMasterReport';
 import InsertModal from '../staticModal/insertModal'

export default function ClientMasterForm(props) {
	
 // use ref  use state at  the same time 
 
	const [client ,setClient]= useState({})
	  const[show,setshow]=useState(false)
  	const inputRef=useRef()
	const selectInputRef = useRef()
	const clientMaster= useRef(new Array())

	

	const [clientName ,setclientName]= useState();
	const [node ,setnode]= useState();
	const [nodalCustodian ,setnodalCustodian] =useState();

	const [customerCustodian ,setcustomerCustodian]=useState();
	const [deliveryAnchor ,setdeliveryAnchor]=useState();
	const [projectManager ,setprojectManager]=useState();

 	// const [clientMaster,setclientMaster] = useState([])
  	const changeHandler = e => {
		setClient({...client, [e.target.name]: e.target.value})
	}

	 

	const update=async(e)=>
	{
		 e.preventDefault();

		 try
		 {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ client:client })
			};
			const response = await fetch('http://localhost:4000/tracking/client-master', requestOptions);
			const data = await response.json();
  				if(data.error){
					  //use ref For DOM purpose
					 console.log("data ::",data.error, " ")
					 setclientName(data.error.clientName)
					 setcustomerCustodian(data.error.customerCustodian)
					 setdeliveryAnchor(data.error.deliveryAnchor)

					 setnodalCustodian(data.error.nodalCustodian)
					 setnode(data.error.node)
					 setprojectManager(data.error.projectManager)
					}

				 else{
					setclientName()
					setcustomerCustodian()
					setdeliveryAnchor()
					setnodalCustodian()
					setnode()
					setprojectManager()

					inputRef.current.reset()
					// clientMaster.push(data);
    				clientMaster.current.push(data)
					console.log("clientMaster ", clientMaster)
					setshow(true)
  				 }
    		 }
		 catch(err)
		 {
			console.log("error ", err)
 		 }
     	 
  	}	
		  
	  const handlerClose=()=>
	  {
		  setshow(false)
	  }
    return (
       <>
	   <InsertModal show={show} close={handlerClose} ></InsertModal>
 				<div class="page-inner">
					<div class="page-header">
						<h4 class="page-title">Client Master</h4>
						<ul class="breadcrumbs">
							<li>
								<a href="#"><i class="las la-home"></i></a>
							</li>
							<li class="separator">
								<a>/</a>
							</li>
							<li class="active">
								<a href="#">Client Master</a>
							</li>
						</ul>
					</div>
					
					<div class="content-wrapper white-bg">
					 	<div class="user-form">
							<form ref={inputRef} >
							  <div class="form-row">
								<div class="form-group col-md-4">
								  <label for="inputname">Client Name</label>
								  <input type="text" class="form-control" name="clientName" onChange={changeHandler}  required></input>
								  <div   className="error" >{clientName}</div>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Node</label>
								  <input type="text" class="form-control" name="node" onChange={changeHandler}  required></input>
								  <div  className="error">{node}</div>

								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Nodal Custodian</label>
								  <input type="text" class="form-control" name="nodalCustodian" onChange={changeHandler}  required></input>
								  <div  className="error">{nodalCustodian} </div>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Customer Custodian</label>		 
								  <input type="text" class="form-control" name="customerCustodian" onChange={changeHandler}  required></input>
								  <div  className="error">{customerCustodian} </div>
 								</div>

								<div class="form-group col-md-4">
								  <label for="inputname">Delivery Anchor</label>
								  <input type="text" class="form-control" name="deliveryAnchor" onChange={changeHandler}  required></input>
								  <div  className="error">{deliveryAnchor}</div>

 								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Project Manager</label>
 								  <input type="text" class="form-control" name="projectManager" onChange={changeHandler}  required></input>
								   <div  className="error">{projectManager} </div>

  								</div>
							  </div>
							  <div class="mb-2">
								<button type="button" onClick={update} class="btn btn-primary mr-3" >Submit</button>
							  </div>  
							</form>
						  </div>
						  <ClientMasterReport  report={clientMaster}></ClientMasterReport>
   					</div>
					   <Footer></Footer>
 				</div>
	             </>
         );
}
