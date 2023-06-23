import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { RippleModule } from 'primeng/ripple';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginformComponent } from './loginform/loginform.component';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    FeedbackformComponent,
    WelcomepageComponent,
    LoginformComponent,
    MainpageComponent,
    ResetpasswordComponent,
    // WelcomepageComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
   PasswordModule,
    DividerModule,
    CalendarModule,
    TableModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
