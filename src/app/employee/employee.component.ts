import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EmployeeService} from './employee.service';
import {employees} from './employees.interface';

@Component({
  selector: 'app-root',
  templateUrl: './employee.component.html'
  
})

export class EmployeeComponent implements OnInit {
  public userInfo: FormGroup;
  public events
  public updatingData
  public employees
  public updateBtn: Boolean;

  constructor(public data_service: EmployeeService,  public fb: FormBuilder, ) {}

  ngOnInit(): void {
this.getData();
    this.updateBtn = false;
    this.userInfo = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      zipcode: new FormControl(),
      address: new FormControl()
    });
  }

  getData() {
    this.data_service.get().then( userDataFromService => {
      this.employees = userDataFromService;
      console.log(  this.employees );
      //  this.events = todos;
      // this.activeTasks = this.events.filter(events => events.first_name).length;
    });
  }

  save(model: employees) {
    this.data_service.add(model).then(() => {

      this.getData();
    }).then(() => {
     // this.newTodo = ''; // clear input form value
    });

    this.userInfo = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: [''],
      email: [''],
      phone: [''],
      zip: [''],
    });

  }
  public newValue: employees;

  update() {
    this.updateBtn = true;
    this.newValue = this.userInfo.value;
    this.newValue.empId = this.updatingData.empId;
    console.log(this.newValue.empId)
    this.data_service.update(this.newValue).then((data) => {
      console.log(data)
      this.getData();
      this.userInfo = this.fb.group({
        firstName: [''],
        lastName: [''],
        address: [''],
        email: [''],
        phone: [''],
        zipcode: [''],
      });
    });


  }

  goToForm(data) {
    this.updateBtn = true;

   this.data_service.edit(data.empId).then((response => {
      this.updatingData = response;
      console.log(this.updatingData)
     this.userInfo = this.fb.group({
       firstName: [this.updatingData.firstName],
       lastName: [this.updatingData.lastName],
       address: [this.updatingData.address],
       email: [this.updatingData.email],
       phone: [this.updatingData.phone],
       zipcode: [this.updatingData.zipcode],
     });
   }));

  }


  delete(id: string) {
    const index = this.employees.findIndex(obj => obj.empId === id);
    this.employees.splice(index, 1);
    this.data_service.delete(id).then(() => {
      this.getData();
    });
  }
}
