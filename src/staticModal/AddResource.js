import React,{useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Resource from './resource'; 
export default function AddResource(props) {

	const[child,setchild]=useState([])
 	 const[index,setIndex]=useState(0)

  		const addChild=()=>  
		{
			setIndex(index+1);
 			  setchild([...child,{innerChild:Math.floor(Math.random() * 1000) , index:index }]);
			  console.log("index ",index)
			  console.log("child ",child)
  		}	
		   
		   const removeResource=(id)=>
		   {
			console.log("id index", id)		
 				var updateChild=child.splice(id, 1)
			console.log("updateChild : ",updateChild) 	
 			setchild([...updateChild])
 		   }

		  
    return (
       <>
            <Modal show={props.show} onHide={props.close}   backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
            Add Resource
         </Modal.Header>
        <Modal.Body>
 		</Modal.Body>

          <div  class="modal-body mb-0 p-0">
			<div class="user-form">
				<div class="input-group">
					<form>
					<div class="form-row" >
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
                          {
							  child.map((item)=>
							  {
								  console.log("hello woorld ", item)
								  return(
									child.includes(item)?<><Resource remove={removeResource} index={item.index} id={item.innerChild}></Resource></>:""
									
								   )
    							  })
 						  }  
					</form>	
					<div class="mb-2">
							<a class="btn btn-primary mr-3" onClick={props.close}>Done</a>
							<a class="btn btn-yellow mr-3" onClick={addChild}>Add <i class="las la-plus plus"></i></a>
						  </div>  

				</div>  
			</div>
          </div>
        </Modal>
            </>
         );
}














 