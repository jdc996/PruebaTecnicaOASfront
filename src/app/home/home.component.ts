import { Component, OnInit, NgZone } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  responsables:any="";
  constructor(public crud:CrudService,private ngZone:NgZone) {
    
   }

  getCLiente(){
    this.crud.get("/responsable","/").subscribe((data) =>  {
      this.responsables=data;  
      console.log(this.responsables)
  });
  }
  agregarResponsable(id,nombre,correo,telefono){
    if(id && nombre && correo && telefono){
      let params={"Id":id,"Nombre":nombre,"Correo":correo,"Telefono":telefono}
      console.log(params);
      this.crud.post("/responsable/",params).subscribe((data)=>{
        console.log(data);
      });
    }else{
      alert("llene todos los campos");
    }
  }
  borrarResponsable(id){
    this.crud.delete("/responsable/"+id,"").subscribe((data)=>{
      console.log(data);
    })
  }
  updateResponsable(id,nombre,correo,telefono){
    console.log("entro a update")
    if(id && nombre && correo && telefono){
      let params={"Id":id,"Nombre":nombre,"Correo":correo,"Telefono":telefono}
      console.log(params);
      this.crud.update("/responsable/"+id,params).subscribe((data)=>{
        console.log(data);
      });
    }else{
      alert("llene todos los campos");
    }

  }
  ngOnInit() {
  }
  

}
