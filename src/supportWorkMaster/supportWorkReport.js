import React,{useState} from 'react';
import SupportWorkEditModal from './supportWorkEditModal';
import DeleteSure from '../staticModal/sureDelete'
import Modal from 'react-bootstrap/Modal';

export default function SupportWorkReport(props) {
	const [show, setShow] = useState(false);
	 const [sure, setSure] = useState(false);
	 
   	const handleShow = () => setShow(true);
	 const sureHandler = () => setSure(true);
	 const handleClose  = () => setShow(true);

	 const notsureHandler = (sure) =>
	  {
		  console.log("hello",sure)
		setSure(sure);

	  }  


   return (
       <>
 	   <DeleteSure sure={sure} handler={notsureHandler}></DeleteSure>
						<div class="dasboard-table">
							<div class="inner_header">
								<div class="pl0">Support Work Report</div>
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
											<th>Client</th>
											<th>Support Work Type</th>
											<th>Support Work Name</th>
											<th class="pr20">Actions</th>
										</tr>
									</thead>
									<tbody>

									<tr>
										<td  class="pl30 pr0">
											<div class="custom-control custom-checkbox">
											  <input type="checkbox" class="custom-control-input" id="customCheck1" name="example1"></input>
											  <label class="custom-control-label" for="customCheck1"></label>
											</div>
										</td>
										<td>CNH Industrial (India) Pvt. Ltd</td>
										<td>Server work</td>
										<td>Lorem Ipsum is simply dummy text of the printing and typesetting</td>
										<td class="pr20">
											<a onClick={handleShow} href="#"><img src="img/edit.png" ></img></a>
 											<a onClick={sureHandler} href="#" class="plr8" ><img src="img/delete.png" ></img></a>
										</td>
									</tr>
 									</tbody>
								</table>
							</div>
            			</div>	
 							       <>
								   <Modal show={show} onHide={() => setShow(false)} backdrop="false">
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
  	    </>
		 
         );
}
