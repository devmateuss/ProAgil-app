import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-Eventos",
  templateUrl: "./Eventos.component.html",
  styleUrls: ["./Eventos.component.css"]
})
export class EventosComponent implements OnInit {
  eventos: any = [];
  exibirImg = false;
  imgAlt = 50;
  imgMargin = 2;
  filtroLista = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEventos();
  }

  mostrarImg() {
    this.exibirImg = !this.exibirImg;
  }

  getEventos() {
    this.http.get("http://localhost:5000/api/values").subscribe(
      response => {
        console.log(response);
        this.eventos = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
