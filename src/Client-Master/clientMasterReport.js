import React,{useEffect, useRef, useState} from 'react';
import ClientMasterEditModal from './clientMasterEditModal';
import axios from 'axios';
import DeleteSure from '../staticModal/sureDelete';
 
export default function ClientMasterReport(props) {

	const[showEdit,setshowEdit]=useState(false)
	const clientId =useRef()
	const[sureDelete,setsureDelete]=useState(false)

	const clientDeleteId=useRef()

	const[clientMaster,setclientMaster]=useState({myArray:[]})

//	const clientMaster =useRef([])

 	const Clientdata =useRef({})
	const clientName =useRef()

	  
  	const handlerClose=(client)=>
	  {
 
		if(client!=undefined)
		  {
			clientMaster.myArray=[]
			console.log("clientMaster empty", clientMaster)
  			for (let obj of client.current) {
				clientMaster.myArray.push(obj);
			   }
			   console.log("not undefined", clientMaster)
		}
		  else
		  {
  		  }
		setshowEdit(false)
	  }

	  const editClient=(data,id)=>
	  {
		console.log("id ",id)
		setshowEdit(true)
		Clientdata.current=data
		clientId.current=id
  	  }

	  const deleteClient=(id)=>
	  {
		clientDeleteId.current=id;
		setsureDelete(true)
		console.log("delete id ",clientDeleteId)
	}  

	useEffect(() => {
		console.log("render :: ",props.report.current)	
 			 axios.get('http://localhost:4000/tracking/getClientMaster')
		      .then((res) => { 
				clientMaster.myArray=[]

			 for (let obj of res.data) {
				 clientMaster.myArray.push(obj);
				}
					   console.log("clientMaster at report  ", clientMaster)
			   })
	},[props.report.current])

	const closeSureDelete=(data)=>
	{
		if(data!=undefined)
		{
			clientMaster.myArray=[]

			for (let obj of data) {
				clientMaster.myArray.push(obj);
			   }
 			console.log("closeSureDelete : ",data)
		 }
		 setsureDelete(false)

  	}
  	return (
       <>
	   <DeleteSure deleteId={clientDeleteId} open={sureDelete} close={closeSureDelete}></DeleteSure>
	   <ClientMasterEditModal Clientdata={Clientdata} clientId={clientId} showEdit={showEdit} closeEdit={handlerClose}></ClientMasterEditModal>
 							<div class="dasboard-table">
							<div class="inner_header">
								<div class="pl0">Client Master Report</div>
								<div class="tbl-search ml-auto">
									<form class="main-search-form" name="cform" method="post">
										<div class="form-group">
										<input type="text" class="form-control" name="name" id="name" placeholder="Search..." required=""></input>
										</div>
										<button type="submit" class="search-ico"><i class="la la-search"></i></button>	
									</form>
								</div>
								
							</div>
							<div class="table-responsive">
								<table class="table table-striped table-hover">
									<thead>
										<tr>
											<th class="pl30 pr0">
												<div class="custom-control custom-checkbox">
												  <input type="checkbox" class="custom-control-input" id="customCheck" name="example1"></input>
												  <label class="custom-control-label" for="customCheck"></label>
												</div> 
											</th>
											<th>Client Name</th>
											<th>Node</th>						
											<th>Node Custodian</th>
											<th>Customer Custodian	</th>
											<th>Delivery Anchor</th>
											<th>Project Manager</th>
 											<th class="pr20">Actions</th>
										</tr>
									</thead>
									<tbody>

									{
									 clientMaster.myArray.map((item)=>
									{
 										return(
  											<tr key={item._id}>
											<td  class="pl30 pr0">
												<div class="custom-control custom-checkbox">
												  <input type="checkbox" class="custom-control-input" id={item._id} name="example1"></input>
												  <label class="custom-control-label" for={item._id}></label>
												</div>
											</td>
 											<td ref={clientName} id={item._id}>{item.clientName}</td>
											<td>{item.node}</td>
											<td>{item.nodalCustodian}</td>
											<td>{item.customerCustodian}</td>
											<td>{item.deliveryAnchor}</td>
											<td>{item.projectManager}</td>

 											<td class="pr20">
												<a onClick={()=>editClient(item,item._id)}><img src="img/edit.png" ></img></a>
												<a class="plr8"><img src="img/view.png" ></img></a>
   												<a onClick={()=>deleteClient(item._id)}><img src="img/delete.png" ></img></a>
											</td>
										</tr>
										)
									})}
								</tbody>
								</table>
							</div>
 			</div>	
 </>
         );
}
