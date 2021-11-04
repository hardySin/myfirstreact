import React,{useState} from 'react';
   
export default function Login(props) {
     

  const [user ,setUser]= useState({})

  const changeHandler = e => {
		setUser({...user, [e.target.name]: e.target.value})
  }
  
  const login=async(e)=>	
	{
    e.preventDefault();

  		 try
		 {
			const requestOptions = {
				method: 'POST',
        body: JSON.stringify({ user:user }),
				headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
 			};
			const response = await fetch('http://localhost:4000/tracking/signin', requestOptions);
			const data = await response.json();
      console.log("data ", response)
       
			 }
		 catch(err)
		 {
			console.log("error ", err)
		  }
 	}

 

   return (
       <>
    <section class="login-wrapper">
      <div class="login-form">
        <div class="container">
          <a class="theme-logo" href="#">
             <img src="img/logo.png" alt="Project & Resource Tracking System Logo"></img>
          </a>
		  <div class="form_sect">
          <h1>Welcome!</h1>
		  <p class="p-text">Login to your Account</p>
          <form>
            <div class="form-group field">
              <input type="email" name="email" onChange={changeHandler}  autoComplete="off" class="form-control floating-label uid" placeholder="Email ID"></input>
            </div>
            <div class="form-group field mb20">
              <input type="password" name="password" onChange={changeHandler} class="form-control floating-label pass" placeholder="Password"></input>
            </div>
            <div><button onClick={login}  class="btn btn-info">Login</button></div>
           </form>
		  </div>
          <p class="login_copyright">
            © 2020, Project & Resource Tracking System. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
	 
    </>
       );
}
