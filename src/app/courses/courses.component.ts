import {Component} from '@angular/core';
@Component({
    selector: 'courses',//<courses>
    templateUrl: './courses.component.html'
})
export class CoursesComponent {
  title="List of Courses:";
  courses=["Math", "Science", "English", "Bilogy", "Computer Science", "Web Development"];
}