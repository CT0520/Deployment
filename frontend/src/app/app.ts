import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService, Data } from '../Service/data-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  data : Data[] = [];
  constructor(private service: DataService) { }
  
  ngOnInit() {
    this.getData();
  }

  

  getData() {
    this.service.getData().subscribe((data: Data[]) => {
      this.data = data;
    });
  }
}
