import React,{useState} from 'react';
import RenderCalender from './renderCalender';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
 
export default function Calender(props) {
    return (
        <div style={{padding:'20px'}}>
         <FullCalendar plugins={[ dayGridPlugin ]} 
         initialView="dayGridMonth"
         theme={true}
        events={ [
            {
              daysOfWeek: [0,6], //Sundays and saturdays
              render:"background",
              color: "#666363",
              textColor:"#FFFFFF" ,
              title:"Weekly Off",
              titleHtml_Size: '100px',
              overLap: true,
              allDay: true

            },
        {
              daysOfWeek: [1,2,3,4,5], //Sundays and saturdays
              render:"background",
              color: "#030101",
              textColor:"#FFFFFF" ,
              title:"N/A",
              titleHtml_Size: '100px',
              overLap: true,
              allDay: true

            }]}
        />
        </div>
           );
}
