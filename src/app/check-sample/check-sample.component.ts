import { CommonModule } from '@angular/common';
import { Component, 
  OnInit, 
  DoCheck, 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked,
  AfterViewInit, 
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements 
  OnInit, 
  DoCheck, 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked,
  AfterViewInit,
  OnDestroy{

  quantidade:number = 0;

  constructor(){}

  somar(){
    this.quantidade += 1;
  }
  subtrair(){
    this.quantidade -= 1;
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  


}
