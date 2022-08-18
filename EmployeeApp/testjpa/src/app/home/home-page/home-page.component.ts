import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { HomeServiceService } from '../home-service.service';
import { Employee } from 'src/app/Models/Employee';
import {NgbAlert, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { HtmlParser } from '@angular/compiler';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  EmployeeList:Employee[]=[];
  closeResult = '';
  Employee:Employee=new Employee();

  displayedColumns: string[] = ['name','salary','action'];

  EmployeedataSource:MatTableDataSource<any>= new MatTableDataSource<any>();

  constructor(private homeservice:HomeServiceService,private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getEmployeesData();
  }


  getEmployeesData(){
    this.homeservice.getEmployeesData().subscribe(data=>{
      // console.log(data);
      this.EmployeedataSource=new MatTableDataSource<any>(data);
    })
  }

  addEmployee(){
    // console.log(this.Employee);
    this.homeservice.postEmployeeData(this.Employee).subscribe(data=>{
      // console.log(data);
      if(data==true){
        this.getEmployeesData();
         this.close();
        alert("succcessfully added Employee");
      }
      else{
        alert("Failed to added Employee");
      }
    });
     
  }

  close(){
    this.modalService.dismissAll();
  }

  open(content) {
    this.modalService.open(content);
  }
  
  deleteEmployeeData(id:number){
    
    this.homeservice.deleteEmployeeData(id).subscribe(data=>{
      if(data==true){
        alert("successfully deleted data");
      }
      else{
        alert("Error couldnt delete the data");
      }
      this.getEmployeesData();
    });
  }
}
