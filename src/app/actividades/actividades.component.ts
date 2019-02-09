import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  actividades:any="";
  constructor(public crud:CrudService) { 

  }
  
  getActividades(){
    this.crud.get("/actividad/","").subscribe((data) =>  {
      this.actividades=data;  
      console.log(this.actividades)
    });
  }
  agregarActividad(id,descripcion,fechaRegistro,fechaLimite,soporte,estado,responsable){
    if(id && descripcion && fechaRegistro && fechaLimite && soporte && estado && responsable){
      let params={"Id":id,"Descripcion":descripcion,"FechaRegistro":new Date(fechaRegistro),
      "FechaLimite":new Date(fechaLimite),"Soporte":soporte,"Estado":{Id:estado},"Responsable":{Id:responsable}}
      console.log(params);
      this.crud.post("/actividad/",params).subscribe((data)=>{
        console.log(data);
      });
    }else{
      alert("llene todos los campos");
    }
  }

  updateActividad(id,descripcion,fechaRegistro,fechaLimite,soporte,estado,responsable){
    if(id && descripcion && fechaRegistro && fechaLimite && soporte && estado && responsable){
      let params={"Id":id,"Descripcion":descripcion,"FechaRegistro":new Date(fechaRegistro),
      "FechaLimite":new Date(fechaLimite),"Soporte":soporte,"Estado":{Id:estado},"Responsable":{Id:responsable}}
      console.log(params);
      this.crud.update("/actividad/"+id,params).subscribe((data)=>{
        console.log(data);
      });
    }else{
      alert("llene todos los campos");
    }
  }
  
  deleteActividad(id){
    this.crud.delete("/actividad/"+id,"").subscribe((data)=>{
      console.log(data);
    })
  }


  ngOnInit() {
  }

}
