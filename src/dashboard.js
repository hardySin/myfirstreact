import React,{useState} from 'react';
import Calender from './calender';
import Footer from './footer';
import Header from './header';
import NavBar from './navbar';
import ProjectReport from './projectReport';
 
 
export default function Dashboard(props) {
 
   return (
        <>
  				<div class="page-inner">
					<div class="page-header">
						<h4 class="page-title">Dashboard</h4>
						<ul class="breadcrumbs">
							<li>
								<a href="#"><i class="las la-home"></i></a>
							</li>
							<li class="separator">
								<a>/</a>
							</li>
							<li class="active">
								<a href="#">Dashboard</a>
							</li>
						</ul>
					</div>
					
					<div class="content-wrapper white-bg">
						
						<div class="dashboard_tiles">
							<div class="row">
								<div class="col-md-4">
									<div class="tiles">
										<div class="text_pnl">
											<p>Working Days</p>
											<h1>22</h1>
										</div>
										<img src="img/tiles1.svg"></img>
									</div>
								</div>
								<div class="col-md-4">
									<div class="tiles">
										<div class="text_pnl">
											<p>Field Timesheet</p>
											<h1>18</h1>
										</div>
										<img src="img/tiles2.svg"></img>
									</div>
								</div>
								<div class="col-md-4">
									<div class="tiles">
										<div class="text_pnl">
											<p>Pending Timesheet</p>
											<h1>04</h1>
										</div>
										<img src="img/tiles3.svg"></img>
									</div>
								</div>
							</div>
						</div>
                        <Calender></Calender>
                        <ProjectReport></ProjectReport>
  					</div>
                     <Footer></Footer>
 				</div>
 
       </>
         );
}
