import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  reportes:any="";
  constructor(private crud:CrudService) { }

  getReportesEstado(id){
    this.crud.get("/actividad?query=Estado.Id:"+id,"").subscribe((data) =>  {
      this.reportes=data;  
      console.log(this.reportes)
    });
  }
  getReportesResponsable(id){
    this.crud.get("/actividad?query=Responsable.Id:"+id,"").subscribe((data) =>  {
      this.reportes=data;  
      console.log(this.reportes)
    });
  }

  ngOnInit() {
  }

}
