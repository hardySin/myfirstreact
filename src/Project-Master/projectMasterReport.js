import React,{useState} from 'react';
 
 
export default function ResourceMasterEdit(props) {
     
   return (
       <>

<div class="dasboard-table">
							<div class="inner_header">
								<div class="pl0">Project Master Report</div>
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
											<th>Project Type</th>						
											<th>Project Cost</th>
											<th>Project Work Name</th>
											<th>Project Hr</th>
											<th>Client Spokesperson</th>
											<th width="110px">Resource ID</th>
											<th width="180px">Resource Name</th>
											<th width="110px">Assign From</th>
											<th width="110px">Assign T0</th>
											<th>Assign Date</th>
											<th>Priority</th>
											<th>Initial Target Date</th>
											<th>Revised Target Date</th>
											<th>Reason for Target Date Change</th>
											<th>Completion Date</th>
											<th>Remarks</th>
											<th>Status</th>
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
										<td>New Development</td>
										<td>₹4,000,000.00</td>
										<td>Lorem Ipsum is simply dummy</td>
										<td>160 hours </td>
										<td>Ritesh Kushwaha</td>
										<td colspan="4" class="plr0">
											<table class="table table-striped">
												<tr class="bdr0">
													<td class="ptb0" width="110px">10627</td>
													<td class="ptb0" width="150px">Ankint Gupta</td>
													<td class="ptb0" width="100px">20/10/2020</td>
													<td class="ptb0" width="100px">20/11/2020 <span class="click_btn"><i class="las la-plus icn"></i></span></td>										
												</tr>
												<tr class="bdr0 resource_show">
													<td class="ptb5" width="110px">10627</td>
													<td class="ptb5" width="150px">Ankint Gupta</td>
													<td class="ptb5" width="100px">20/10/2020</td>
													<td class="ptb5" width="100px">20/11/2020</td>										
												</tr>
												<tr class="bdr0 resource_show">
													<td class="ptb5" width="110px">10627</td>
													<td class="ptb5" width="150px">Ankint Gupta</td>
													<td class="ptb5" width="100px">20/10/2020</td>
													<td class="ptb5" width="100px">20/11/2020</td>										
												</tr>
											</table>
										</td>
										<td>08/10/2020</td>
										<td>Lorem Ipsum</td>
										<td>16/10/2020</td>
										<td>20/10/2020</td>
										<td>Lorem Ipsum is simply dummy text</td>
										<td>20/10/2020</td>
										<td>Lorem Ipsum is simply dummy text</td>     
										<td><span class="status text-progress">•</span> In Progress</td>										
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
