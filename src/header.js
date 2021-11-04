import React,{useState} from 'react';
import NotificationPanel from './notificationPanel';
import ProfileChannel from './profileChannel';
 
 
export default function Header(props) {
     
   return (
       <>

        <div class="main-header">
		 	<div class="logo-header">
				
				<a href="user-list.html" class="logo">
					<img src="img/logo-inner.png" alt="navbar brand" class="navbar-brand desktop"></img>
					<img src="img/icon.png" class="mobile"></img>
				</a>
				<button class="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation"><i class="las la-bars"></i>
				</button>
				<button class="topbar-toggler more toggled"><img src="img/icon-options-vertical.svg"></img></button>
			</div>
 
 			<nav class="navbar navbar-header navbar-expand-lg">
				<div class="nav-toggle">
					<button class="btn btn-toggle toggle-sidebar">
						<i class="las la-bars"></i>
					</button>
				</div>
				<div class="container-fluid">
					
					<ul class="navbar-nav topbar-nav ml-md-auto align-items-center">

						 
						 <NotificationPanel></NotificationPanel>
					 <ProfileChannel></ProfileChannel>
					</ul>
				</div>
			</nav>
 		</div>

       </>
         );
}
