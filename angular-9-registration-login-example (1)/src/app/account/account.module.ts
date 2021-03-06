import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import {ForgotPasswordComponent} from './forgotpassword.component';
import {OTPComponent} from './otp.component';
import {NewPasswordComponent} from './newpassword.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        OTPComponent,
        NewPasswordComponent
    ]
})
export class AccountModule { }