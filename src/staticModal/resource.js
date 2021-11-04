import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
  
export default function Resource(props) {

		const remove=()=>
		{
			console.log("props.index ",props.index)
			 props.remove(props.index)
  		}

  
   return (
       <>
	   	   {props.index}
 	   {props.id}
 	 			<i key={props.id} class='las la-times-circle col-md-12 cust-cancel' onClick={remove}></i>
		 				<div class="form-row" key={props.index} >
							<div class="form-group col-md-6">
							  <label for="inputname">Resource ID</label>
							  <input type="text" class="form-control" placeholder="10627"></input>
							</div>
							<div class="form-group col-md-6">
							  <label for="inputname">Resource Name</label>
							  <input type="text" class="form-control" placeholder="Ankit Kumar"></input>
							</div>
							<div class="form-group col-md-6">
							  <label for="inputname">Assigned From</label>
							  <div class="datepic"><input type="text" id="datepicker4" class="form-control" value="11/13/2020" ></input>
                              </div>
							</div>
							<div class="form-group col-md-6">
							  <label for="inputname">Assigned To</label>
							  <div class="datepic"><input type="text" id="datepicker5" class="form-control" value="11/13/2020" ></input></div>
							</div>
						</div>
             </>
         );
}














 