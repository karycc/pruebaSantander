import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Dato } from '../model/dato'

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  currentPage = 1;
  itermsPerPage = 10;
  totalItems = 0;
  datos:any[];
  inicio = true;

  constructor(private dataService:DataService) { }

  ngOnInit() {

  }

  consultar(){
    let params = "?page="+this.currentPage+"&pageSize="+this.itermsPerPage;
    this.getDatos(params);
    this.inicio = false;
  }

  getDatos(params): void {
    this.dataService.getDatos(params)
        .subscribe(
           datos => {
            this.datos = datos['results'];
          });
  }

  nextPage(){
    this.currentPage++;
    let params = "?page="+this.currentPage+"&pageSize="+this.itermsPerPage;
    this.getDatos(params);
  }

  prevPage(){
    if(this.currentPage > 1){
      this.currentPage--;
    }
    
    let params = "?page="+this.currentPage+"&pageSize="+this.itermsPerPage;
    this.getDatos(params);
  }

}
