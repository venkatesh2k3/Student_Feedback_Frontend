import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegserviceService } from '../regservice.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent {
  branchOpt : any;
  cols: any[] = [];
  facultyOpt:any;
  subjectOpt:any;
  feedback: FormGroup|any;
semesterOpt: any;
data:any;
yearOpt: any;
semOpt: any;
hodOpt: any;
  constructor(public service :RegserviceService){
    this.branchOpt = ['CSE', 'IT','ECE','MECH', 'AGRI', 'CIVIL','AGRI', 'EEE'];
    this.facultyOpt = ['Bindhu Madhuri', 'Tirimala Rao','Venkateswarlu','Jaya Suma', 'Anil'];
    this.subjectOpt = ['ACD','AWS','AJP', 'ML','CNS'];
    this.yearOpt=['I','II','III','IV'];
    this.semesterOpt=['I','II'];
    this.hodOpt=['Dr B.Tirimula Rao']
    }

    ngOnInit(): void {
      this.feedback=new FormGroup({
       acadamic_year : new FormControl('',[Validators.required]),
       Year : new FormControl('',[Validators.required]),
       department: new FormControl('',[Validators.required]),
       faculty_name : new FormControl('',[Validators.required]),
       Subject : new FormControl('',[Validators.required]),
       semester: new FormControl('',[Validators.required]),
       Feedback : new FormControl('',[Validators.required]),
       hodname : new FormControl('',[Validators.required]),
       
      })
    }

public convertToPDF1()
{
  this.convertToPDF();
  this.Submit();
}


public convertToPDF() {
  html2canvas(document.body).then(canvas => {
    const contentDataURL = canvas.toDataURL('image/png');
    let pdf = new jsPDF('p', 'mm', 'a4');
    var width = pdf.internal.pageSize.getWidth();
    var height = canvas.height * width / canvas.width;
    var position = 0;
    var heightLeft = height;
    
    while (heightLeft > 0) {
      position = heightLeft - height;
      pdf.addPage();
      pdf.addImage(contentDataURL, 'PNG', 0, position, width, height);
      heightLeft -= height;
    }
    
    pdf.save('Feedback.pdf');
  });
}



tableData:any = [{
  "SL_No" : 1,
  "Characteristics" : "Knowledge of the subject",
},
{
  "SL_No" : 2,
  "Characteristics" : "Coming well prepared for the class",
},
{
  "SL_No" : 3,
  "Characteristics" : "Giving clear Explanations",
},
{
  "SL_No" : 4,
  "Characteristics" : "Command of Language",
},
{
  "SL_No" : 5,
  "Characteristics" : "Clear and Audible Voice",
},
{
  "SL_No" : 6,
  "Characteristics" : "Holding the attention of students through the Class",
},
{
  "SL_No" : 7,
  "Characteristics" : "Providing more matter than in the textbook",
},
{
  "SL_No" : 8,
  "Characteristics" : "Capability to clear the doubts of Students",
},
{
  "SL_No" : 9,
  "Characteristics" : "Encouraging students to ask questions and participate in Discussion",
},
{
  "SL_No" : 10,
  "Characteristics" : "Appreciating students as and when Deserving",
},
{
  "SL_No" : 11,
  "Characteristics" : "Willingness to help students even out of Class",
},
{ "SL_No" : 12,
  "Characteristics" : "Return of value Test Papers/Records in Time",
},
{
  "SL_No" : 13,
  "Characteristics" : "Punctuality and following Time Table Schedule",
},
{
  "SL_No" : 14,
  "Characteristics" : "Coverage of Syllabus",
},
{
  "SL_No" : 15,
  "Characteristics" : "Impartial(Treating all students alike)",
}]

Submit() {
  // let tableData: any = {};
  for (let item of this.tableData) {
    if (item.Grade) {
    this.tableData[item.Characteristics] = item.Grade;
  }}

  let data = {
    knowledge_of_subject: this.tableData["Knowledge of the subject"],
    coming_well_for_class: this.tableData["Coming well prepared for the class"],
    giving_clear_explanations: this.tableData["Giving clear Explanations"],
    command_of_language: this.tableData["Command of Language"],
    clear_and_audible_voice: this.tableData["Clear and Audible Voice"],
    holding_attention_of_students: this.tableData["Holding the attention of students through the Class"],
    providing_more_matter: this.tableData["Providing more matter than in the textbook"],
    clear_the_doubts: this.tableData["Capability to clear the doubts of Students"],
    encouraging_students: this.tableData["Encouraging students to ask questions and participate in Discussion"],
    appreciating_students: this.tableData["Appreciating students as and when Deserving"],
    willingness_to_help_students: this.tableData["Willingness to help students even out of Class"],
    return_of_testpapers: this.tableData["Return of value Test Papers/Records in Time"],
    punctuality_following_timetable: this.tableData["Punctuality and following Time Table Schedule"],
    coverage_of_syllabus: this.tableData["Coverage of Syllabus"],
    impartial:this.tableData["Impartial(Treating all students alike)"],
    department: this.feedback.controls.department.value,
    hod_name: this.feedback.controls.hodname.value ,
    acadamic_year:this.feedback.controls.acadamic_year.value,
    faculty_name: this.feedback.controls.faculty_name.value,
    subject_name: this.feedback.controls.Subject.value,
    year: this.feedback.controls.Year.value,
    semester: this.feedback.controls.semester.value
  };

  console.log(data);

  this.service.FeedBData(data).subscribe(
    (res: any) => {
      // console.log(res, "posting response");
    },
    (error: any) => {
      console.error(error);
    }
  );
}

 
 }
