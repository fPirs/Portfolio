import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/services/rest.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  downloadLink: string = '';

  constructor(
    private restService: RestService
  ) { }

  ngOnInit(): void {
    this.restService.getCv().subscribe((res:string)=> this.downloadLink=res);    
  }
  
  download(): void{
    const linkSource = `data:application/pdf;base64,${this.downloadLink}`;
    const link = document.createElement("a");
    const fileName = "cv-pirri.pdf";
    link.href = linkSource;
    link.download = fileName;
    link.click();

  }

}
