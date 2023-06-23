import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegserviceService } from '../regservice.service';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  branchOpt : any;

  formGroup: FormGroup |any;
  registeration: FormGroup|any;
  gender: any;
    rowData: any;
    yearOpt:any;
    semesterOpt:any;
// passwordPattern = '^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$';

  constructor(public service :RegserviceService) {
      this.branchOpt = ['CSE', 'IT','ECE','MECH', 'AGRI', 'CIVIL','AGRI', 'EEE'];
      this.yearOpt=['I','II','III','IV'];
      this.semesterOpt=['I','II']
     }

     ngOnInit(): void {
      this.registeration=new FormGroup({
      Rollnumber: new FormControl('', [Validators.required,Validators.pattern('[A-Z 0-9 ]{10}')]),
      Name: new FormControl('', [Validators.required,Validators.minLength(6), Validators.pattern('[a-zA-Z ]*')]),
      Year: new FormControl('', [Validators.required]),
      Semester: new FormControl('', [Validators.required]),
      Branch: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required, Validators.minLength(10)]),
      Gender: new FormControl('', Validators.required),
      Phonenumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      Email: new FormControl('', [Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    }
      Submit(){
      let data={
      rollNumber: this.registeration.controls.Rollnumber.value,
      name: this.registeration.controls.Name.value,
      year: this.registeration.controls.Year.value,
      semester: this.registeration.controls.Semester.value,
      branch : this.registeration.controls.Branch.value,
      address: this.registeration.controls.Address.value,
      gender: this.registeration.controls.Gender.value,
      phoneNumber: this.registeration.controls.Phonenumber.value,
      email: this.registeration.controls.Email.value,
      password: this.registeration.controls.Password.value,
    } 
    console.log(data);
       this.service.PostData(data).subscribe((res:any)=>{
      console.log(res,"posting response");
   }); 
   this.showSuccessAlert();
   this.registeration.reset();
    }
    showSuccessAlert(): void {
      alert("Congratulations! Your registration was successful.");
    }

    capitalizeRollNumber(): void {
      const rollNumberControl = this.registeration.get('Rollnumber');
      if (rollNumberControl.value) {
        rollNumberControl.setValue(rollNumberControl.value.toUpperCase());
      }
    }
  }




  // passwordMatchValidator(form: FormGroup): { passwordMismatch: boolean } | null {
  //   const password = form.get('Password');
  //   const confirmPassword = form.get('ConfirmPassword');

    // if (password.value !== confirmPassword.value) {
    //   return { passwordMismatch: true };
    // }

  //   return null;
  // }
  