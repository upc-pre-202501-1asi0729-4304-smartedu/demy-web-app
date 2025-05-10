import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../../shared/components/language-switcher/language-switcher.component';

/**
 * Component representing the application's login page.
 * Contains a reactive login form with validation, and handles navigation
 * to the dashboard page after successful login.
 *
 * @remarks
 * This component also includes a language switcher for the app,
 * and is designed with Material Design.
 *
 */

@Component({
  selector: 'app-login',
  imports: [
    LanguageSwitcherComponent,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    TranslateModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm: FormGroup;

  /**
   * Constructor for the LoginComponent. Creates the reactive form with validation
   * and initializes the FormBuilder and Router services.
   *
   * @param fb - FormBuilder service for creating reactive forms
   * @param router - Router service for handling navigation
   */

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  /**
   * Method executed when the form is submitted.
   * Validates the form and, if valid, navigates to the dashboard.
   * If invalid, marks all fields as touched to display errors.
   */

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario enviado:', this.loginForm.value);
      this.router.navigate(['/dashboard']); // Redirige solo si es válido
    } else {
      this.loginForm.markAllAsTouched(); // Marca todos los campos con error
    }
  }
}
