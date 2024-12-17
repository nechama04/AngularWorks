import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: 'student-list.component.html',
  standalone: false

})
export class StudentListComponent implements OnInit{
  students: Student[] = [
    {
      id: 1,
      first_name: "gil",
      last_name: "bar",
      adrress: "9 street",
      phone: "0586749302",
      is_active: true,
      marks_avg: 78
    },
    {
      id: 2,
      first_name: "dan",
      last_name: "lev",
      adrress: "dizingof",
      phone: "0536702142",
      is_active: false,
      marks_avg: 92
    }];
    deleteStudent(student: Student){
      let indexToDelete = this.students.indexOf(student);
      this.students.splice(indexToDelete, 1);
    }
    constructor(){}
    ngOnInit(): void {
      
    }

}
