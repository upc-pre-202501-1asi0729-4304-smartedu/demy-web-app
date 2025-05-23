import {Component, signal} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {Course} from '../../model/course.entity';
import {CourseService} from '../../services/course.service';
import {FormsModule} from '@angular/forms';

/**
 * Component responsible for displaying a dropdown list of available courses.
 * Used in the attendance feature to allow users to choose a course before marking attendance.
 */
@Component({
  selector: 'app-attendance-class-select',
  standalone: true,
  templateUrl: './attendance-class-select.component.html',
  styleUrls: ['./attendance-class-select.component.css'],
  imports: [
    TranslatePipe,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule
  ]
})
export class AttendanceClassSelectComponent {
  /**
   * Holds the list of available courses retrieved from the backend.
   */
  courses = signal<Course[]>([]);

  /**
   * Stores the currently selected course ID.
   */
  selectedCourseId = signal<string>('');

  /**
   * Initializes the component with a reference to {@link CourseService}.
   *
   * @param courseService - Service used to fetch course data from the backend.
   */
  constructor(private courseService: CourseService) {}

  /**
   * Angular lifecycle hook called after component initialization.
   * Fetches all available courses and updates the `courses` signal.
   */
  ngOnInit(): void {
    this.courseService.getAll().subscribe(c => this.courses.set(c));
  }
}
