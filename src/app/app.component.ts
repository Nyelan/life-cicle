import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TitleComponent} from "./title/title.component"
import {CheckSampleComponent} from "./check-sample/check-sample.component"
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TitleComponent, CheckSampleComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy{
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  title = 'life-cicle';
  isAliveCheckSample:boolean = true;
}
