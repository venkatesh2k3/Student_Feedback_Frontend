import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.myForm = this.formBuilder.group({});
  }

  register() {
    console.log('Register button clicked');
    this.router.navigateByUrl('reg')
  }

  login() {
    console.log('Login button clicked');
    this.router.navigateByUrl('log')
  }
}
