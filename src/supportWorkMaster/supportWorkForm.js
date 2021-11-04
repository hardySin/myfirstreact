import React,{useState} from 'react';
import Footer from '../footer';
import SupportWorkReport from './supportWorkReport';
  
 
export default function SupportWorkForm(props) {
     
   return (
       <>
 				<div class="page-inner">
					<div class="page-header">
						<h4 class="page-title">Support Work</h4>
						<ul class="breadcrumbs">
							<li>
								<a href="#"><i class="las la-home"></i></a>
							</li>
							<li class="separator">
								<a>/</a>
							</li>
							<li class="active">
								<a href="#">Support Work</a>
							</li>
						</ul>
					</div>
					
					<div class="content-wrapper white-bg">
						
						<div class="user-form">
							<form>
							  <div class="form-row">
								<div class="form-group col-md-6">
								  <label for="inputname">Support Work Type</label>
								  <select class="custom-select">
									<option selected>Server work</option>
									<option selected>Data</option>
								  </select>
								</div>
								<div class="form-group col-md-6">
								  <label for="inputname">Support Work Name</label>
								  <input type="text" class="form-control" id="inputPassword4" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting"></input>
								</div>
							  </div>
							  <div class="mb-2">
								<a class="btn btn-primary mr-3" href="user-list.html">Submit</a>
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
