import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { HomeServiceService } from '../home-service.service';
import { Employee } from 'src/app/Models/Employee';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  EmployeeList:Employee[]=[];
  closeResult = '';
  Employee:Employee=new Employee();
  name:string;

  constructor(private homeservice:HomeServiceService,private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getEmployeesData();
  }


  getEmployeesData(){
    this.homeservice.getEmployeesData().subscribe(data=>{
      console.log(data);
      this.EmployeeList=data;
    })
  }

  addEmployee(){
    console.log(this.Employee);
    this.homeservice.postEmployeeData(this.Employee).subscribe(data=>{
      console.log(data);
      this.getEmployeesData();
      alert("succcessfully added Employee");
    });
     
  }

  close(){
    this.modalService.dismissAll();
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
}
