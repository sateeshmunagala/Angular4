import { Injectable } from '@angular/core';
import {employees} from './employees.interface';
import {Http} from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService {
  public employeesData: employees[] = [];
  public updatingData: employees
  baseUrl = 'http://localhost:61280/api/Employee';

  constructor(public http: Http) {  }


  get() {
    return new Promise(resolve => {
      const header = new Headers();
      header.append('Content-Type', 'application/json');
      this.http.get(this.baseUrl, {headers: header}).map(res => res.json())
        .subscribe(data => {
          this.employeesData = data;
            resolve(this.employeesData);
          },
          error => console.log(error),
          () => console.log('Finished')
        );
    });
  }

  add(data) {
    return new Promise(resolve => {
      const header = new Headers();
      header.append('Content-Type', 'application/json');
      this.http.post(this.baseUrl, data , {headers: header}).map(res => res.json())
        .subscribe(reponse => {
          console.log(reponse)
            this.employeesData = reponse;
            resolve(this.employeesData);
          },
          error => console.log(error),
          () => console.log('Finished')
        );


    });
  }

  edit(id: string){
    return new Promise(resolve => {
      const header = new Headers();
      header.append('Content-Type', 'application/json');
      this.http.get(this.baseUrl + '/' + id, {headers: header}).map(res => res.json())
        .subscribe(reponse => {
          this.updatingData = reponse
            resolve(this.updatingData);
          },
          error => console.log(error),
          () => console.log('Finished')
        );
    });
  }

  delete(id: string) {
    return new Promise(resolve => {
      const header = new Headers();
      header.append('Content-Type', 'application/json');
      this.http.delete(this.baseUrl + '/' + id, {headers: header}).map(res => res.json())
        .subscribe(reponse => {
          },
          error => console.log(error),
          () => console.log('Finished')
        );
    });

  }
  put(data) {
    return new Promise(resolve => {
      resolve(data);
    });
  }

  update(model: employees) {
    return new Promise(resolve => {
      const header = new Headers();
      header.append('Content-Type', 'application/json');
      this.http.put(this.baseUrl, model, {headers: header}).map(res => res.json())
        .subscribe(reponse => {
            resolve(reponse);
          },
          error => console.log(error),
          () => console.log('Finished')
        );
    });
  }


}
