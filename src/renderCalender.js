import React,{useState} from 'react';
 
 
export default function RenderCalender(props) {
 
    var week=7;
  
   return (
       <>
        {
          props.weeks_props.map(i=>
            {
                return(
                    <tr>
                        
                        {props.calender_props.map(item=>
                            {
                               return(
                                   <>
                                   {item.dayname}
                                   </>
                               )
                            })}
                    </tr>
                )
            })

        }
       </>
   )
   }