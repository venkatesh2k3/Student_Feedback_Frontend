import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
    resetForm: any;
  
    constructor(private formBuilder: FormBuilder) { }
  
    ngOnInit(): void {
      this.resetForm = this.formBuilder.group({
        username: ['', Validators.required],
        oldPassword: ['', Validators.required],
        newPassword: ['', Validators.required]
      });
    }
  
    login(): void {
      this.showSuccessAlert();
      if (this.resetForm.valid) {
        const { username, oldPassword, newPassword } = this.resetForm.value;
        // const data=this.resetForm
        // Perform login logic here
        console.log('Username:', username);
        console.log('Old Password:', oldPassword);
        console.log('New Password:', newPassword);
        // You can add your actual login implementation here
      }
    }
    showSuccessAlert(): void {
      alert("Login Successful :)");
    }
}
