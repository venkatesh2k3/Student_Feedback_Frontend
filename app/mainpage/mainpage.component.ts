import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  myForm: FormGroup;
  rollNumber: any;

  constructor(private formBuilder: FormBuilder, private router:Router, private route: ActivatedRoute) {
    this.myForm = this.formBuilder.group({});
  }
  ngOnInit() {
    
    this.rollNumber= this.route.snapshot.paramMap.get('rollNumber');
  }

  resetpassword() {
    console.log('Register button clicked');
    this.router.navigateByUrl('reset')
  }

  feedback() {
    console.log('Login button clicked');
    this.router.navigateByUrl('feedb')
  }
}


