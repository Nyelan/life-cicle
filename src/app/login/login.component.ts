import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isAuthenticated!: boolean;
  submitted = false;

  userName!:string;

  onSubmit(name:string, password:string){
    this.submitted = true;

    this.userName = name;

    if(name === "admin" && password === "admin"){
      this.isAuthenticated = true;
    }else{
      this.isAuthenticated = false;
    }
  }
}
