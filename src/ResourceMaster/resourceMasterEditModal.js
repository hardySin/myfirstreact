import React,{useState} from 'react';
 
 
export default function ResourceMasterEditModal(props) {
     
   return (
       <>
         <div aria-labelledby="myModalLabel" class="modal fade show edit_detail" id="editResourceMaster" role="dialog" aria-modal="true">
         <div class="modal-dialog modal-md" role="document">
         <div  class="modal-content">
         <div  class="modal-header">
		   <div class="modal-title w-100 small-title">Do you want to Edit this Record ?</div>
		   <button  aria-label="Close" class="close" data-dismiss="modal" type="button">
		   <i class="las la-times"></i></button></div>
         <div  class="modal-body mb-0 p-0">
			<div class="user-form">
							<form>
							  <div class="form-row">
								<div class="form-group col-md-4">
 								  <label for="inputname">Resource TMC</label>
								  <select
				                    class="custom-select"
				                    id="resourceTMC" 
				                  >
				                                <option value="">Select</option>
				                                <option value="11000">11000</option>
				                                <option value="11001">11001</option>
				                                <option value="11002">11002</option>
				                                <option value="11003">11003</option>
				                                <option value="11004">11004</option>
				                                <option value="11005">11005</option>
				                                <option value="11006">11006</option>
				                                <option value="11007">11007</option>
				                                <option value="11008">11008</option>
				                                <option value="11009">11009</option>
				                                <option value="11010">11010</option>
				                         
				                </select>  
								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Resource Name</label>
								  <input type="text" class="form-control" id="resourceName"></input>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Reporting Manager</label>
								  <input type="text" class="form-control" id="reportingManager"></input>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Resource CTC</label>
								   <input type="text" class="form-control" id="resourceCTC"></input>
								</div>
								<div class="form-group col-md-4">
 								  <label for="inputname">Resource Skill Set</label>
								   <select id="resourceSkillSet" class="custom-select" multiple >
								      <option value="">Select</option>
									  <option value="C">C</option>
									  <option value="C++">C++</option>
									  <option value="DS">DS</option>
									  <option value="Java">Java</option>
									  <option value="PHP">PHP</option>
									  <option value="Mysql">Mysql</option>
									  <option value="Javascript">Javascript</option>
									  <option value="Jquery">Jquery</option>
									</select>
								</div>
								<div class="form-group col-md-4">
								  <label for="inputname">Resource Location</label>
								  <input type="text" class="form-control" id="resourceLocation"></input>
								</div>
							  </div>
							  <div class="mb-2">
								<button onclick="editResource()" class="btn btn-primary mr-3" data-target="#edit-success" data-toggle="modal" data-dismiss="modal">Edit</button>
							  </div>  
							</form>
						  </div>
            </div>
            </div>
            </div>
         </div>

          </>
         );
}
