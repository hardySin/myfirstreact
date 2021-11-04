import React,{useState} from 'react';
 
 
export default function ProjectReport(props) {
 
   return (
       <>
       			<div class="dasboard-table">
            <div class="inner_header">
                <div class="pl0">Project Report</div>
                <div class="tbl-search ml-auto">
                    <form class="main-search-form" name="cform" method="post">
                        <div class="form-group">
                        <input type="text" class="form-control" name="name" id="name" placeholder="Search..." required=""></input>
                        </div>
                        <button type="submit" class="search-ico"><i class="la la-search"></i></button>	
                    </form>
                </div>
                <div class="add">
                    <a href="daily-tracker.html" class="btn btn-primary">Add <i class="las la-plus plus"></i></a>
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
                            <th>TMC No.</th>
                            <th>Name</th>						
                            <th>Project Name</th>
                            <th>Date</th>
                            <th>Hours</th>
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
                        <td>10702</td>
                        <td>Md Kaushar Neyazi </td>
                        <td>Project & Resource Tracking System</td>                        
                        <td>6 NOV 2020</td>
                        <td>9.5.00</td>
                        <td><span class="status text-success">•</span> 	Approved</td>
                        <td class="pr20">
                            <a href="#"><img src="img/edit.png" ></img></a>
                            <a href="#" class="plr8"><img src="img/view.png" ></img></a>
                            <a href="#"><img src="img/delete.png" ></img></a>
                        </td>
                    </tr>
                     </tbody>
                </table>
            </div>

<div class="clearfix pb-3">
<div class="hint-text">Showing <b>6</b> out of <b>25</b> entries</div>
<ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a href="#" class="page-link">1</a></li>
    <li class="page-item"><a href="#" class="page-link">2</a></li>
    <li class="page-item active"><a href="#" class="page-link">3</a></li>
    <li class="page-item"><a href="#" class="page-link">4</a></li>
    <li class="page-item"><a href="#" class="page-link">5</a></li>
    <li class="page-item"><a href="#" class="page-link">Next</a></li>
</ul>
</div>
 </div>	
       </>
            )
}
  