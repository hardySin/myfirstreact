import React,{useState,useEffect} from 'react';
import Footer from '../footer';
import SupportWorkReport from '../supportWorkMaster/supportWorkReport';
 
import axios from 'axios';
import InsertModal from '../staticModal/insertModal'
import AddResource from '../staticModal/AddResource';

  
export default function ProjectMasterForm(props) {
	 
	
	const [project ,setProject]= useState({})
	const[clientMaster,setClientMaster]=useState([{}])
	const[loadData,setloadData]=useState(false)
	const[show,setshow]=useState(false)
	const[add,setAdd]=useState(false)

 	let post=[];
	const changeHandler = e => {
		setProject({...project , [e.target.name]: e.target.value})
	}

		useEffect(() => {
		 setloadData(false)
		   axios.get('http://localhost:4000/tracking/getClientMaster')
		.then((res) => {
			setloadData(false)
			
			for (let obj of res.data) {
				post.push(obj)
			}
			setClientMaster(post)
			console.log("post :",post)
			})

	}, [loadData])

const update=(e)=>
{
	 e.preventDefault();
	  axios({
		method: 'post',
		url: 'http://localhost:4000/tracking/projectMaster',
		headers: { 'Content-Type': 'application/json' },
		data: JSON.stringify({ project:project }),
		})		 
		 .then(res =>{
		if(res!==undefined){

			   setloadData(true)
			   setshow(true)
			 let response=res.data
			 console.log("data ",  response  ) 
			}
		})
  }
	  
  const handlerClose=()=>
  {
	  setshow(false)
  }

  const openAddResource=()=>
  {
	  setAdd(true)
  }

  const closeAddResource=()=>
  {
	setAdd(false)
  }




   return (
       <>
	   <AddResource show={add} close={closeAddResource}></AddResource>
	   	   <InsertModal show={show} close={handlerClose}></InsertModal>
  				<div class="page-inner">
					<div class="page-header">
						<h4 class="page-title">Project Master</h4>
						<ul class="breadcrumbs">
							<li>
								<a href="#"><i class="las la-home"></i></a>
							</li>
							<li class="separator">
								<a>/</a>
							</li>
							<li class="active">
								<a href="#">Project Master</a>
							</li>
						</ul>
					</div>
					
					<div class="content-wrapper white-bg">
						
						<div class="user-form">
							<form>
							  <div class="form-row">
								<div class="form-group col-md-4">
								  <label for="inputname">Client Name</label>
								  <input type="text" class="form-control" placeholder="CNH Industrial (India) Pvt. Ltd" name="clientName"></input>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Project Type</label>
								  <select class="custom-select" name="projectType">
									<option selected> T&M </option>
								  </select>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputEmail4">Project Cost</label>
								  <input type="email" class="form-control" placeholder="₹4,000,000.00" name="projectCost"></input>
								</div>
								
								<div class="form-group col-md-4">
								  <label for="inputname">Project Work Name</label>
								  <input type="email" class="form-control" placeholder="Lorem Ipsum is simply" name="projectWorkName"></input>
								</div>
								<div class="form-group col-md-4">
								  <label for="input">Project Hours</label>
								   <input type="email" class="form-control" placeholder="160 hours"  name="projectHours"></input>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputPassword4">Client Spokesperson</label>
								   <input type="email" class="form-control" placeholder="Amit Kumar Jha" name="clientSpokesperson"></input>
								</div>
								
								<div class="form-group col-md-4">
								  <label for="inputname">Status</label>
								 <select class="custom-select" name="status">
									<option selected>In Progress</option>
								  </select>
								</div>
								<div class="form-group col-md-4">
								  <label for="input">Assign Date</label>
								   <input type="email" class="form-control" placeholder="08/10/2020" name="assignDate"></input>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputPassword4">Priority</label>
								   <input type="email" class="form-control" placeholder="Lorem Ipsum is simply" name="priority"></input>
								</div>
								
								<div class="form-group col-md-4">
								  <label for="inputname">Initial Target Date</label>
								 <div class="datepic"><input type="text" id="datepicker" class="form-control" value="11/13/2020" name="initialTargetDate" ></input></div>
								</div>
								<div class="form-group col-md-4">
								  <label for="input">Revised Target Date</label>
								   <div class="datepic"><input type="text" id="datepicker1" class="form-control" value="11/13/2020" name="revisedTargetDate" ></input></div>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputPassword4">Reason for Target Date Change</label>
								   <input type="email" class="form-control" placeholder="Lorem Ipsum is simply dummy text of the..." name="reasonforTargetDateChange"></input>
								</div>
								
								<div class="form-group col-md-4">
								  <label for="inputname">Extended To</label>
								 <div class="datepic"><input type="text" id="datepicker2" class="form-control" value="11/13/2020" name="extendedTo" ></input>
                                 </div>
								</div>
								<div class="form-group col-md-8">
								  <label for="input">Extension Reasons</label>
								  <input type="text" name="extensionReasons" class="form-control" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..."></input>
								</div>
								
								<div class="form-group col-md-4">
								  <label for="inputname">Completion Date</label>
								 <div class="datepic">
									 <input type="text" id="datepicker3" class="form-control" value="11/13/2020" name="completionDate" >
                                 </input>
                                 </div>
								</div>
								<div class="form-group col-md-8">
								  <label for="input">Remarks</label>
								  <input type="text" class="form-control" name="remarks" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..."></input>
								</div>
								
							  </div>
							  <div class="mb-2">
								<a class="btn btn-yellow mr-3" href="#" onClick={openAddResource} >Add Resource <i class="las la-plus plus"></i></a>
								<a class="btn btn-primary mr-3" href="#">Submit</a>
							  </div>  
							</form>
						  </div>
 						 <SupportWorkReport></SupportWorkReport>
 					</div>
                    <Footer></Footer>
 				</div>
 		
          </>
         );
}
