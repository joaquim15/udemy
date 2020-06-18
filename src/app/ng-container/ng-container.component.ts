import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    { name: "Joaquim", role: "admin", ultimoAcesso: new Date(`6/17/2020`) },
    { name: "Maria", role: "user", ultimoAcesso: new Date(`6/16/2020`) },
    { name: "Jose", role: "admin", ultimoAcesso: new Date(`6/10/2020`) },
    { name: "Eric", role: "user", ultimoAcesso: new Date(`6/6/2020`) }
  ];

}
