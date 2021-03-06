import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 constructor() { }

  ngOnInit(): void {
  }
  
  
  login = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('')
  })
  get email(){return this.login.get('email')}

}
