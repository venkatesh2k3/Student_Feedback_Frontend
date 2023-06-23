import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegserviceService } from '../regservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  capitalizeRollNumber(): void {
    const rollNumberControl = this.LoginForm.get('rollNumber');
    if (rollNumberControl.value) {
      rollNumberControl.setValue(rollNumberControl.value.toUpperCase());
    }
  }
  rollNumber: string | undefined;
  password: string | undefined;
  LoginForm: FormGroup | any;
  errorMessage: any;
  successMessage: string | undefined;

  constructor(
    private fb: FormBuilder,
    private service: RegserviceService,
    private router: Router
  ) {
    this.LoginForm = this.fb.group({
      rollNumber: ['',[Validators.required,Validators.pattern('[A-Z 0-9 ]{10}')]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  Submit() {
    let data = {
      rollNumber: this.LoginForm.value.rollNumber,
      password: this.LoginForm.value.password
    };
    //formControlName="radiof"
   
    this.service.LoginData(data).subscribe(
      (res: any) => {
        console.log(res); 
        if (res.includes('success')) {
          this.successMessage = "Login successful";
          console.log(""); 
          this.showSuccessAlert();
          this.router.navigateByUrl(`main/:${this.LoginForm.controls.rollNumber.value}` )

        //  this.router.navigate(['/main', this.rollNumber]);
        } else {
          this.errorMessage = "Invalid Credentials";
        }
      }
    );
  }
  showSuccessAlert(): void {
    alert("Login Successful :)");
  }
}
