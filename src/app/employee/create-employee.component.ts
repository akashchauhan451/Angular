import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  name:string;

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl()
    });

  }

  onSubmit(){
    this.name = this.employeeForm.value;
  }
}