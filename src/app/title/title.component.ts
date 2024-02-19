import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() title:string = '';
  @Input() name:string = '';

  constructor(){
    console.log(`Constructor ${this.name}`);
  }
  ngOnInit(): void {
    this.name = this.name + 'x';
    console.log(`OnInit ${this.name}`);
  }

  ngOnChanges(): void {
    console.log(`Constructor ${this.name}`);
  }

}
