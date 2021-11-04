import React,{useState,useEffect} from 'react';
import Footer from '../footer';
import ResourceMasterReport from './resourceMasterReport';
import axios from 'axios';
import InsertModal from '../staticModal/insertModal'

 
export default function ResourceMasterForm(props) {
	 
	const [resource ,setResource]= useState({})
	const[resourceMaster,setResourceMaster]=useState([{}])
	const[loadData,setloadData]=useState(false)
	const[show,setshow]=useState(false)
 	let post=[];
	const changeHandler = e => {
		setResource({...resource, [e.target.name]: e.target.value})
	}

	useEffect(() => {
 			setloadData(false)
   			axios.get('http://localhost:4000/tracking/getResourceMaster')
			.then((res) => {
				setloadData(false)
				
				for (let obj of res.data) {
					post.push(obj)
				}
				setResourceMaster(post)
				console.log("post :",post)
    			})
 
  	  }, [loadData])

	const update=(e)=>
	{
 		e.preventDefault();
  		axios({
			method: 'post',
			url: 'http://localhost:4000/tracking/resource-master',
			headers: { 'Content-Type': 'application/json' },
			data: JSON.stringify({ resource:resource }),
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

   return (
       <>
		   <InsertModal show={show} close={handlerClose}></InsertModal>
 				<div class="page-inner">
					<div class="page-header">
						<h4 class="page-title">Resource Master</h4>
						<ul class="breadcrumbs">
							<li>
								<a href="#"><i class="las la-home"></i></a>
							</li>
							<li class="separator">
								<a>/</a>
							</li>
							<li class="active">
								<a href="#">Resource Master</a>
							</li>
						</ul>
					</div>
					
					<div class="content-wrapper white-bg">
						
						<div class="user-form">
							<form>
							  <div class="form-row">
								<div class="form-group col-md-4">
								  <label for="inputname">Resource TMC</label>
								  <input type="text" class="form-control" placeholder="10627" name="resourceTMC"
								   onChange={changeHandler} ></input>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Resource Name</label>
								  <input type="text" class="form-control" id="inputPassword4" placeholder="Ankit Gupta" 
								  name="resourceName" onChange={changeHandler} ></input>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputEmail4">Reporting Manager</label>
								  <input type="email" class="form-control" placeholder="Amit Kumar Jha" 
								  name="reportingManager" onChange={changeHandler}  ></input>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Resource CTC</label>
								   <input type="email" class="form-control" placeholder="₹800,000" name="resourceCTC"
								    onChange={changeHandler}></input>
								</div>
								<div class="form-group col-md-4">
								  <label for="input">Resource Skill Set</label>
								  <input type="email" class="form-control" placeholder="Java, PHP, jQuery, Mysql" 
								  name="resourceSkillSet" onChange={changeHandler}></input>
									</div>
								<div class="form-group col-md-4">
								  <label for="inputPassword4">Resource Location</label>
								  <input type="email" class="form-control" placeholder="Gurgaon, Haryana"  
								  name="resourceLocation" onChange={changeHandler}></input>
								</div>
							  </div>
							  <div class="mb-2">
								<button class="btn btn-primary mr-3"  onClick={update}>Submit</button>
							  </div>  
							</form>
						  </div>

                            <ResourceMasterReport></ResourceMasterReport>
  					</div>
                    <Footer></Footer>
				</div>
 		         </>
         );
}
