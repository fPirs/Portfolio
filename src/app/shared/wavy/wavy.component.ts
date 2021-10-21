import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wavy',
  templateUrl: './wavy.component.html',
  styleUrls: ['./wavy.component.scss']
})
export class WavyComponent implements OnInit {
  
  @Input() value: string ="";
  @Input() anim: boolean = true;
  @Input() random: boolean = false;
  
  values: string[]=[];
  get randomValues(): number {
    return Math.random() * this.values.length;
  }

  constructor() { }

  ngOnInit(): void {
    this.values=this.value.split("");
  }

  getNumber(i: number): string {
    return '--i:' + (this.random ? this.randomValues : (i+1));
  }
}
