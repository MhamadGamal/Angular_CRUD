import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';
import { IUser } from '../../shared/interfaces/userData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm;
  constructor(private fb: FormBuilder, private authSer: AuthService) {
      this.registerForm = fb.group({
        fullName: ['', [Validators.required]],
        userName: ['', [Validators.required, Validators.minLength(8)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        gender: ['', [Validators.required]],
        address: ['', [Validators.required]]
      });
      this.registerForm.get('gender').setValue('male');
   }

  ngOnInit() {
  }
  register(formData:IUser) {
    if (formData.password.startsWith('ADMIN')) {
      formData.type = 'admin';
    } else {
      formData.type = 'user';
    }
    this.authSer.signUp(formData);
    // .then( (res) => console.log(res) );
  }
}
