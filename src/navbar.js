import React,{useState} from 'react';
import Dashboard from './dashboard';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
  } from "react-router-dom";
import ClientMasterForm from './Client-Master/clientMasterForm';
import ResourceMasterForm from './ResourceMaster/resourceMasterForm';
import SupportWorkForm from './supportWorkMaster/supportWorkForm';
import ProjectReport from './projectReport';
import ProjectMasterForm from './Project-Master/projectMasterForm';
import Header from './header';
import ClientMasterReport from './Client-Master/clientMasterReport';

export default function NavBar(props) {
     
   return (
       <>
	   <Router>
		<Header></Header>	
 		<div class="sidebar sidebar-style-2">			
			<div class="sidebar-wrapper scrollbar scrollbar-inner">
				<div class="sidebar-content">
					<ul class="nav nav-primary">
						
						<li class="nav-item bdr_top1">
						<NavLink to="/dashboard">
						<div class="icn"><img src="img/daily_tracker.png" class="normal"></img><img src="img/daily_tracker1.png" class="slected"></img></div>
						<p>Dashboard</p>
						</NavLink>

 						</li>
						<li class="nav-item">
						<NavLink to="/client-master">
						<div class="icn"><img src="img/daily_tracker.png" class="normal"></img><img src="img/daily_tracker1.png" class="slected"></img></div>
						<p>Client Master</p>
						</NavLink>

 						</li>

						<li class="nav-item">
						<NavLink to="/resource-master">
						<div class="icn"><img src="img/daily_tracker.png" class="normal"></img><img src="img/daily_tracker1.png" class="slected"></img></div>
						<p>Resource Master</p>
						</NavLink>

 						</li>
						
						<li class="nav-item">
						<NavLink  to="/project-master">
						<div class="icn"><img src="img/daily_tracker.png" class="normal"></img><img src="img/daily_tracker1.png" class="slected"></img></div>
						<p>Project Master</p>
						</NavLink >

 						</li>
						
						<li class="nav-item">
						<NavLink  to="/support-work">
						<div class="icn"><img src="img/daily_tracker.png" class="normal"></img><img src="img/daily_tracker1.png" class="slected"></img></div>
						<p>Support Work</p>
 						</NavLink >
 						</li>
						
						<li class="nav-item active">
						<NavLink  to="/daily-tracker">
 
						<div class="icn"><img src="img/daily_tracker.png" class="normal"></img><img src="img/daily_tracker1.png" class="slected"></img></div>
								<p>Daily Tracker</p>
  						</NavLink >

  						</li>
						
					</ul>
				</div>
			</div>
		</div>

		<Switch>
          <Route exact path="/dashboard">
		  <div class="main-panel">
		      	<div class="content">
				  <Dashboard></Dashboard>
 	       </div>
    	  </div>
           </Route>
          <Route path="/client-master">
		  <div class="main-panel">
		      	<div class="content">
					  <ClientMasterForm></ClientMasterForm>
  	       </div>
    	  </div>

           </Route>
		  <Route path="/resource-master">
		  <div class="main-panel">
		      	<div class="content">
				  <ResourceMasterForm></ResourceMasterForm>
 	       </div>
    	  </div>

           </Route>

          <Route path="/project-master">
		  <div class="main-panel">
		      	<div class="content">
				  <ProjectMasterForm></ProjectMasterForm>
 	       </div>
    	  </div>

             </Route>

          <Route path="/support-work">
		  <div class="main-panel">
		      	<div class="content">
				  <SupportWorkForm></SupportWorkForm>
 	       </div>
    	  </div>

           </Route>

          <Route path="/daily-tracker">
		  <div class="main-panel">
		      	<div class="content">
				  <h1>hello world</h1>
 	       </div>
    	  </div>

            </Route>

			<Route path="/">
		  <div class="main-panel">
		      	<div class="content">
				  <Dashboard></Dashboard>
 	       </div>
    	  </div>

            </Route>


         </Switch>
		</Router>
        </>
         );
}
