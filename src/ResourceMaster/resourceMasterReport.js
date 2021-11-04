import React,{useState} from 'react';
 
 
export default function ResourceMasterReport(props) {
     
   return (
       <>
			   <div class="dasboard-table">
							<div class="inner_header">
								<div class="pl0">Resource Master Report</div>
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
											<th>Resource TMC</th>
											<th>Resource Name</th>						
											<th>Reporting Manager</th>
											<th>Resource CTC</th>
											<th>Resource Skill Set</th>
											<th>Resource Location</th>
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
										<td>10627</td>
										<td>Ankit Gupta</td>
										<td>Amit Kumar Jha</td>
										<td>₹800,000</td>                        
										<td>Java, PHP, jQuery, Mysql</td>
										<td>Gurgaon, Haryana</td>
										<td class="pr20">
											<a href="#"><img src="img/edit.png" ></img></a>
											<a href="#" class="plr8"><img src="img/view.png" ></img></a>
											<a href="#"><img src="img/delete.png" ></img></a>
										</td>
									</tr>
									
									 
									</tbody>
								</table>
							</div>
		 		</div>
          </>
         );
}
